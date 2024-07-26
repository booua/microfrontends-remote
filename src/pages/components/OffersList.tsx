import { useEffect, useState } from 'react';
import { FiAnchor, FiCloudRain } from 'react-icons/fi';

import type { Offer } from '@/types/offer';

import { useOffers } from '../hooks/useOffers';

const OffersList = () => {
  const [offers, setOffers] = useState<Offer[]>();
  const { getOffers } = useOffers();

  useEffect(() => {
    const fetchOffers = async () => {
      const response = await getOffers();
      setOffers(response);
    };
    fetchOffers();
  }, []);

  return (
    <div className="flex h-[calc(100dvh-250px)] flex-1 grow flex-col overflow-scroll">
      {offers?.map((offer) => (
        <div
          key={offer.id}
          className="mb-4 flex cursor-pointer items-center justify-between rounded-lg border border-gray-300 bg-white p-3"
        >
          <div className="flex items-center">
            <div className="p-5">
              <FiAnchor />
            </div>
            <div className="flex flex-col">
              <h3 className="font-bold">{offer.title}</h3>
              <div className="flex gap-4 text-sm">
                <span className=" font-bold text-primary">{offer.company}</span>
                <span>{offer.location}</span>
                <span>{offer.date}</span>
              </div>
            </div>
          </div>
          <div className="text-right" style={{ textAlign: 'right' }}>
            <span className="block text-right text-xl font-bold text-primary">
              {offer.salary}
            </span>
            <span className="flex flex-row items-center gap-1 text-right text-sm font-normal">
              <FiCloudRain />
              {offer.category}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OffersList;
