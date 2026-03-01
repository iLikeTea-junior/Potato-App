import mrPotato from '@/assets/images/mrPotato.png'
import goldenPotato from '@/assets/images/goldenPotato.png'
import fries from '@/assets/images/fries.png'
import oddlyShapedPotato from '@/assets/images/oddlyShapedPotato.png'
import potatoChips from '@/assets/images/potatoChips.png'

export interface Card {
    id: number,
    normal: boolean,
    cardPrompt: string
}

export const cards: Card[] = [
    {id: 0, normal: true, cardPrompt: "Potatoes are originated in the Andes mountains of Peru and Bolivia"},
    {id: 1, normal: true, cardPrompt: "People have been growing potatoes for over 8000 years"},
    {id: 2, normal: true, cardPrompt: "There are more than 4000 known potato varieties"},
    {id: 3, normal: true, cardPrompt: "The first ever vegetable grown in space was a potato in 1995"},
    {id: 5, normal: true, cardPrompt: "Potatoes are the world's 4th most important food crop"},
    {id: 6, normal: true, cardPrompt: "A potato has more potassium than a banana"},
    {id: 7, normal: true, cardPrompt: "The potato ever grown, weighted about 5kg"},
    {id: 34, normal: false, cardPrompt: goldenPotato},
    {id: 8, normal: true, cardPrompt: "French fries actually came from Belgium, not France"},
    {id: 9, normal: true, cardPrompt: "Potato leaves and stems are actually poisonous, the tuber is save tho"},
    {id: 10, normal: true, cardPrompt: "Green potatoes are toxic ☢️"},
    {id: 11, normal: true, cardPrompt: "Potatoes last longer in a cool and dark place"},
    {id: 12, normal: true, cardPrompt: "The word potato comes from the Spanish word 'patata'"},
    {id: 13, normal: true, cardPrompt: "A raw potato is about 80% water"},
    {id: 14, normal: true, cardPrompt: "The inca were among the first to farm potatoes"},
    {id: 15, normal: true, cardPrompt: "Potatoes were brought to Europe in the late 1500s"},
    {id: 16, normal: true, cardPrompt: "Potatoes became a main food source in Ireland by the 1700s"},
    {id: 17, normal: true, cardPrompt: "Potatoes spread from from Europe to Asia, Africa, and North America"},
    {id: 37, normal: false, cardPrompt: potatoChips},
    {id: 18, normal: true, cardPrompt: "Potatoes helped reduce starvation in Europe providing cheap calories"},
    {id: 19, normal: true, cardPrompt: "Potatoes were viral during WW2 when food was scarce"},
    {id: 35, normal: false, cardPrompt: fries},
    {id: 20, normal: true, cardPrompt: "Most nutrients are in or near the potato skin"},
    {id: 21, normal: true, cardPrompt: "Soaking sliced potatoes removes starch and makes fries crispier"},
    {id: 22, normal: true, cardPrompt: "Leave the skin on when boiling to hold nutrients"},
    {id: 23, normal: true, cardPrompt: "A plain potato is almost fat-free, adding toppings would add more calories"},
    {id: 24, normal: true, cardPrompt: "Potatoes have all essential amino acids"},
    {id: 25, normal: true, cardPrompt: "You can fully cook a potato in about 7-10 minutes in a microwave"},
    {id: 26, normal: true, cardPrompt: "Gnocchi is a Italian dumpling made from potatoes"},
    {id: 27, normal: true, cardPrompt: "Hash browns are made from shredded or diced potatoes"},
    {id: 28, normal: true, cardPrompt: "Hash browns are made from shredded or diced potatoes"},
    {id: 33, normal: false, cardPrompt: mrPotato},
    {id: 29, normal: true, cardPrompt: "A potato can make electricity"},
    {id: 30, normal: true, cardPrompt: "A potato kind called 'Chuño' can last up to 10 years"},
    {id: 31, normal: true, cardPrompt: "King Frederick the Great made people eat potatoes by making them look valuable"},
    {id: 36, normal: false, cardPrompt: oddlyShapedPotato},
    {id: 32, normal: true, cardPrompt: "Potatoes can be used as medicine, to sooth burns, reduce swelling, calm stomach issues, and ease headaches"}
]

