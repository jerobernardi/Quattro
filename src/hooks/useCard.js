import React, {useState} from 'react'
const useCard = (contentLength) => {
    const [card, setCard] = useState(0);

    const nextCard = () => {
        setCard(card + 1 === contentLength ? 0 : card + 1)
    }
    const prevCard = () => {
        setCard(card - 1 < 0 ? contentLength - 1 : card - 1)
    }
    return [card, prevCard, nextCard]
}
export default useCard
