import React, {useState} from 'react'
const useCard = () => {
    const [card, setCard] = useState(0);
    const CardsContent = [
        {
            img: '',
            desc: 'iasfb asjfbasjb x  aisfujba ab  uasb f ba bafa noab f'
        },{
            img: '',
            desc: 'klasfc asj asudfa usb au a x asdfougasfv aiosf asib f acvsfi w3ais askf'
        },{
            img: '',
            desc: 'aks a c asfie pqb svin a sbaskn'
        }
    ]
    const nextCard = () => {
        setCard(card + 1 === CardsContent.length ? 0 : card + 1)
    }
    const prevCard = () => {
        setCard(card - 1 < 0 ? CardsContent.length - 1 : card - 1)
    }
    return [CardsContent[card], prevCard, nextCard, CardsContent]
}
export default useCard
