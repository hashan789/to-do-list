import { formatCurrency } from "@/app/utilities/formatCurrency";
import storeItems from "../../../data/data.json"

import { CardWithForm } from "@/app/components/CardForm";

export default function Store() {
  return (
    <div className="flex items-center justify-between">
      {
        storeItems.map((item) => (
          <div key={item.id}>
            <CardWithForm name={item.name} price={formatCurrency(Number(item.price))}/>
          </div>
        ))
      }
    </div>
  )
}
