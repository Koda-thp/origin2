import Image from "next/image";
import { twMerge } from "tailwind-merge";

/**
 * Cadre visuel éditorial. Si `src` est fournie, rend l'image via next/image ;
 * sinon, affiche un placeholder dans la palette (en attendant les visuels).
 */
interface VisualProps {
  src?: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export function Visual({ src, alt, className, sizes = "100vw", priority = false }: VisualProps) {
  return (
    <div className={twMerge("relative overflow-hidden rounded-2xl bg-tan", className)}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="absolute inset-0 bg-gradient-to-br from-rose via-tan to-terracotta"
        />
      )}
    </div>
  );
}
