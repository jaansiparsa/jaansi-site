import "./DesktopHero.css";

import { Link } from "react-router-dom";
import { desktopItems } from "../site";

const smallFloorLights = [
  { left: "2%", bottom: "22%", rotate: 4, scale: 1.45 },
  { left: "30%", bottom: "7%", rotate: -3, scale: 1.1 },
  { left: "34%", bottom: "42%", rotate: -4, scale: 1.35 },
  { left: "44%", bottom: "40%", rotate: 8, scale: 1.48 },
  { left: "54%", bottom: "43%", rotate: 2, scale: 1.4 },
  { left: "64%", bottom: "41%", rotate: -6, scale: 1.32 },
  { left: "62%", bottom: "22%", rotate: -5, scale: 1.38 },
  { left: "76%", bottom: "13%", rotate: 6, scale: 1.05 },
] as const;

export function DesktopHero() {
  return (
    <section className="desktop-hero" aria-label="Home">
      <div className="desktop-scene">
        <img
          src="/lighteffects.png"
          alt=""
          className="light-effects"
          aria-hidden="true"
        />

        {desktopItems.map((item) => (
          <Link
            key={item.id}
            to={item.to}
            className={[
              "desktop-item",
              item.size && `desktop-item--${item.size}`,
            ]
              .filter(Boolean)
              .join(" ")}
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
            }}
          >
            <img src={item.icon} alt="" />
            <span>{item.label}</span>
          </Link>
        ))}

        <img
          src="/heropic.png"
          alt="Hi, I'm Jaansi! I like learning && building && sharing knowledge && helping people! Super glad you're here <3"
          className="hero-photo"
        />

        <div className="hero-floor-lights" aria-hidden="true">
          {smallFloorLights.map((light, index) => (
            <img
              key={index}
              src="/smallfloorlight.png"
              alt=""
              className="small-floor-light"
              style={{
                left: light.left,
                bottom: light.bottom,
                transform: `rotate(${light.rotate}deg) scale(${light.scale})`,
              }}
            />
          ))}
        </div>

        <img
          src="/floorlighteffects.png"
          alt=""
          className="floor-light-effects"
          aria-hidden="true"
        />
      </div>
    </section>
  );
}
