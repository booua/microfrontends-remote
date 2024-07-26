import type { Offer } from '@/types/offer';

export const useOffers = () => {
  const getOffers = async () => {
    const controller = new AbortController();

    const timeoutId = setTimeout(() => {
      controller.abort();
    }, 4000);

    const res = await fetch('http://localhost:3001/api/offers', {
      signal: controller.signal,
      next: { tags: ['offers'] },
    });

    clearTimeout(timeoutId);
    const offers: Offer[] = await res.json();
    return offers;
  };

  return { getOffers };
};
