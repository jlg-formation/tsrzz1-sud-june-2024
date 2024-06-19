import { cx0, r0, cy0 } from "./constants";
import { Point } from "./interfaces/Point";

export const computeAngle = (i: number, samples: number): number =>
  (i * (2 * Math.PI)) / samples;

export const computePointOnBigCircle = (angle: number): Point => {
  return {
    x: cx0 + r0 * Math.cos(angle),
    y: cy0 + r0 * Math.sin(angle),
  };
};
