import { useState } from "react";
import Image from "next/image";
import Card from "../../public/img/icons/Interface/Credit_Card_01.svg";
import Wallet from "../../public/img/icons/Interface/Wallet.svg";
import Unchecked from "../../public/img/icons/Interface/Checkbox_Unchecked.svg";
import Checked from "../../public/img/icons/Interface/Checkbox_Check.svg";

function PaymentCard() {
  const [checkedCard, setCheckedCard] = useState(true);
  const [checkedCash, setCheckedCash] = useState(false);

  const handleCheckCard = () => {
    setCheckedCard(!checkedCard);
    setCheckedCash(!checkedCash);
  };
  const handleCheckCash = () => {
    setCheckedCash(!checkedCash);
    setCheckedCard(!checkedCard);
  };

  return (
    <div className="w-96 p-8 flex flex-col bg-white shadow-lg rounded-2xl space-y-3">
      <p className="font-medium mb-5">Payment method</p>
      <div
        onClick={handleCheckCard}
        className="flex justify-between items-center py-2 px-4 cursor-pointer duration-200 hover:shadow-lg hover:shadow-lightgray rounded-lg"
      >
        {checkedCard ? (
          <Image
            src={Checked}
            alt="Option"
            width={20}
            height={20}
            className="select-none pointer-events-none"
            priority
          />
        ) : (
          <Image
            src={Unchecked}
            alt="Option"
            width={20}
            height={20}
            className="select-none pointer-events-none"
            priority
          />
        )}
        <div className="w-1/2 flex items-center">
          <p className="text-sm">Joosep&apos;s Visa</p>
        </div>
        <p className="flex items-center text-xs font-medium w-[80px]">
          <span className="mr-2 pt-1">
            <Image
              src={Card}
              alt="Card"
              width={18}
              height={18}
              className="select-none pointer-events-none"
              priority
            />
          </span>{" "}
          ** 0000
        </p>
      </div>
      <div
        onClick={handleCheckCash}
        className="flex justify-between items-center py-2 px-4 cursor-pointer duration-200 hover:shadow-lg hover:shadow-lightgray rounded-lg"
      >
        {checkedCash ? (
          <Image
            src={Checked}
            alt="Option"
            width={20}
            height={20}
            className="select-none pointer-events-none"
            priority
          />
        ) : (
          <Image
            src={Unchecked}
            alt="Option"
            width={20}
            height={20}
            className="select-none pointer-events-none"
            priority
          />
        )}
        <div className="w-1/2 flex items-center">
          <p className="text-sm">Wallet</p>
        </div>
        <p className="flex items-center text-xs font-medium w-[80px]">
          <span className="mr-2 pt-1">
            <Image
              src={Wallet}
              alt="Cash"
              width={18}
              height={18}
              className="select-none pointer-events-none"
              priority
            />
          </span>{" "}
          Cash
        </p>
      </div>
    </div>
  );
}

export default PaymentCard;
