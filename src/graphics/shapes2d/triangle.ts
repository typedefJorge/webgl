import { Shape2d } from "./shape2d";
import { Float32Vector } from "../../utils/vector";
import { BoundingRectangle } from "./boundingRectangle";
import { Midpoint } from "./midpoint";
import { RGBColor } from "../rgbColor";
import { Vec3 } from "../../math/vec3";
import { Settings } from "../../settings";

export class Triangle extends Shape2d
{
    private static readonly numberOfVerticies: number = 3;

    constructor(point1: Vec3, point2: Vec3, rgbColor: RGBColor, gl: WebGLRenderingContext)
    {
        super(rgbColor, point1, point2);

        this.computeVerticies();

        this.glRenderMode = gl.TRIANGLES;
    }

    protected computeVerticies(): void
    {
        const topPoint = Midpoint.between(this.boundingRect.topLeft, this.boundingRect.topRight);

        let array = new Float32Array(Triangle.numberOfVerticies * Settings.floatsPerVertex);

        let insertionIndex = 0;
        this.addXYAndColorToFloat32Array(array, insertionIndex, this.boundingRect.bottomLeft.x,
            this.boundingRect.bottomLeft.y, this.boundingRect.bottomLeft.z);
        insertionIndex += Settings.floatsPerVertex;
        this.addXYAndColorToFloat32Array(array, insertionIndex, topPoint.x, topPoint.y, topPoint.z);
        insertionIndex += Settings.floatsPerVertex;
        this.addXYAndColorToFloat32Array(array, insertionIndex, this.boundingRect.bottomRight.x,
            this.boundingRect.bottomRight.y, this.boundingRect.bottomRight.z);

        this.verticies = new Float32Vector(array);
    }
}