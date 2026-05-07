import type { MutableRefObject } from "react";
import { forwardRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Effect } from "postprocessing";
import * as THREE from "three";

const fragmentShader = `
uniform float uTime;
uniform float uIntensity;

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  vec2 offset = vec2(
    sin((uv.y + uTime * 0.12) * 18.0) * 0.004,
    cos((uv.x + uTime * 0.15) * 20.0) * 0.004
  ) * uIntensity;

  vec4 color = texture(inputBuffer, uv + offset);
  outputColor = vec4(color.rgb, inputColor.a);
}
`;

class DistortionEffectImpl extends Effect {
  constructor() {
    super("DistortionEffect", fragmentShader, {
      uniforms: new Map([
        ["uTime", new THREE.Uniform(0)],
        ["uIntensity", new THREE.Uniform(0)],
      ]),
    });
  }
}

type DistortionEffectProps = {
  progressRef: MutableRefObject<number>;
  sections: number;
};

const DistortionEffect = forwardRef<DistortionEffectImpl, DistortionEffectProps>(
  ({ progressRef, sections }, ref) => {
    const effect = useMemo(() => new DistortionEffectImpl(), []);

    useFrame(({ clock }) => {
      const scaled = progressRef.current * sections;
      const phase = scaled % 1;
      const pulse = 1 - Math.abs(phase - 0.5) / 0.5;
      const intensity = THREE.MathUtils.clamp(pulse, 0, 1) * 0.8;

      effect.uniforms.get("uTime")!.value = clock.getElapsedTime();
      effect.uniforms.get("uIntensity")!.value = intensity;
    });

    return <primitive ref={ref} object={effect} dispose={null} />;
  }
);

DistortionEffect.displayName = "DistortionEffect";

export default DistortionEffect;
