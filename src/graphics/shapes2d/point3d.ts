import { RGBColor } from "../rgbColor";
import { Vec3 } from "../../math/vec3";

export class Point3d {
    public x: number;
    public y: number;
    public z: number;
    public pointSize: number;
    public color: RGBColor;

    constructor(location: Vec3, pointSize: number = 5,
        color: RGBColor = new RGBColor(0, 0, 0))
    {
        this.x = location.x;
        this.y = location.y;
        this.z = location.z;
        this.pointSize = pointSize;
        this.color = color;
    }
}