'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Maximize2, X } from 'lucide-react';
import type { Product } from '@/data/products';

export function ProductPhoto({ product }: { product: Product }) {
  const dialog = useRef<HTMLDialogElement>(null);
  if (!product.imageSrc) return null;

  return (
    <>
      <button
        type="button"
        className="group relative block w-full cursor-zoom-in overflow-hidden rounded-[2rem] border border-forest/10"
        onClick={() => dialog.current?.showModal()}
        aria-label={`Enlarge ${product.name} photo`}
        aria-haspopup="dialog"
      >
        <Image
          src={product.imageSrc}
          alt={`PawBite ${product.name} tin, ${product.countLabel.toLowerCase()}`}
          width={product.imageWidth ?? 2048}
          height={product.imageHeight ?? 2048}
          priority
          sizes="(max-width: 1023px) calc(100vw - 48px), 520px"
          className="aspect-square w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-[1.025]"
        />
        <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-offwhite/95 px-4 py-2 text-xs font-bold text-forest shadow-sm">
          <Maximize2 size={14} aria-hidden="true" /> A closer look
        </span>
      </button>
      <dialog
        ref={dialog}
        aria-label={`${product.name} photo`}
        className="m-auto max-h-[92dvh] w-[min(92vw,850px)] max-w-none overflow-auto rounded-3xl bg-cream p-0 shadow-2xl backdrop:bg-charcoal/75"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between gap-4 border-b border-forest/10 bg-cream px-5 py-3">
          <p className="font-bold">{product.name}</p>
          <button
            type="button"
            onClick={() => dialog.current?.close()}
            aria-label="Close product photo"
            className="rounded-full border border-forest/20 p-2 text-forest hover:bg-forest/5"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <Image
          src={product.imageSrc}
          alt={`Enlarged PawBite ${product.name} tin`}
          width={product.imageWidth ?? 2048}
          height={product.imageHeight ?? 2048}
          sizes="(max-width: 923px) 92vw, 850px"
          className="h-auto w-full"
        />
      </dialog>
    </>
  );
}
