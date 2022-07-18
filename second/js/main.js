const goodsArr = [
    { imgSrc: './public/images/GrayChair.png', bestseller: true, discount: false, new: false, goodGroup: 'Кресла театральные', goodName: 'Театральное кресло Прайм', article: '789-2341', price: '6 762', inStock: true },
    { imgSrc: './public/images/ColloredChair.png', bestseller: false, discount: true, new: false, goodGroup: 'Кресла театральные', goodName: 'Театральное кресло Прайм', article: '789-2341', price: '6 762', inStock: true },
    { imgSrc: './public/images/GrayChair.png', bestseller: false, discount: false, new: true, goodGroup: 'Кресла театральные', goodName: 'Театральное кресло Прайм', article: '789-2341', price: '6 762', inStock: true },
    { imgSrc: './public/images/GrayChair.png', bestseller: false, discount: false, new: false, goodGroup: 'Кресла театральные', goodName: 'Театральное кресло Прайм', article: '789-2341', price: '6 762', inStock: true },
    { imgSrc: './public/images/GrayChair.png', bestseller: false, discount: false, new: false, goodGroup: 'Кресла театральные', goodName: 'Театральное кресло Прайм', article: '789-2341', price: '6 762', inStock: true },
    { imgSrc: './public/images/GrayChair.png', bestseller: false, discount: false, new: false, goodGroup: 'Кресла театральные', goodName: 'Театральное кресло Прайм', article: '789-2341', price: '6 762', inStock: true },
    { imgSrc: './public/images/GrayChair.png', bestseller: false, discount: false, new: false, goodGroup: 'Кресла театральные', goodName: 'Театральное кресло Прайм', article: '789-2341', price: '6 762', inStock: false },
    { imgSrc: './public/images/GrayChair.png', bestseller: false, discount: false, new: false, goodGroup: 'Кресла театральные', goodName: 'Театральное кресло Прайм', article: '789-2341', price: '6 762', inStock: false },
    { imgSrc: './public/images/GrayChair.png', bestseller: false, discount: false, new: false, goodGroup: 'Кресла театральные', goodName: 'Театральное кресло Прайм', article: '789-2341', price: '6 762', inStock: false },
    { imgSrc: './public/images/GrayChair.png', bestseller: false, discount: false, new: false, goodGroup: 'Кресла театральные', goodName: 'Театральное кресло Прайм', article: '789-2341', price: '6 762', inStock: false },
    { imgSrc: './public/images/GrayChair.png', bestseller: false, discount: false, new: false, goodGroup: 'Кресла театральные', goodName: 'Театральное кресло Прайм', article: '789-2341', price: '6 762', inStock: false },
    { imgSrc: './public/images/GrayChair.png', bestseller: false, discount: false, new: false, goodGroup: 'Кресла театральные', goodName: 'Театральное кресло Прайм', article: '789-2341', price: '6 762', inStock: false },
    { imgSrc: './public/images/GrayChair.png', bestseller: false, discount: false, new: false, goodGroup: 'Кресла театральные', goodName: 'Театральное кресло Прайм', article: '789-2341', price: '6 762', inStock: false },
    { imgSrc: './public/images/GrayChair.png', bestseller: false, discount: false, new: false, goodGroup: 'Кресла театральные', goodName: 'Театральное кресло Прайм', article: '789-2341', price: '6 762', inStock: false },
    { imgSrc: './public/images/GrayChair.png', bestseller: false, discount: false, new: false, goodGroup: 'Кресла театральные', goodName: 'Театральное кресло Прайм', article: '789-2341', price: '6 762', inStock: false },
]

const externalWrapper = document.getElementsByClassName('ExternalWrapper')[0];


goodsArr.map((elem) => {
    let goodCard_Img = document.createElement('img'),
        goodCard = document.createElement('div'),
        goodGroup = document.createElement('p');
    goodCard_Img.setAttribute('src', elem.imgSrc);
    goodCard.classList.add('GoodCard');
    goodGroup.classList.add('CardGroupText');
    goodGroup.innerText = elem.goodGroup,
        goodName = document.createElement('p');
    goodName.classList.add('CardGoodName');
    goodName.innerText = elem.goodName;
    let goodCardAdditionalInfo = document.createElement('div');
    goodCardAdditionalInfo.classList.add('CardAdditionalInfo');
    let goodArticle = document.createElement('p');
    goodArticle.classList.add('CardGoodArticle');
    goodArticle.innerHTML = 'Артикул: ';
    let goodArticle_Article = document.createElement('span');
    goodArticle_Article.classList.add('CardGoodArticle_GoodsArticle');
    goodArticle_Article.innerText = elem.article;
    goodArticle.append(goodArticle_Article);
    let goodPriceWrapper = document.createElement('p');
    goodPriceWrapper.classList.add('GoodCardPriceWrapper');
    let goodPrice_lowText_From = document.createElement('p');
    goodPrice_lowText_From.classList.add('GoodCardPrice_LowText');
    goodPrice_lowText_From.innerText = 'от: '
    let goodPrice_Price = document.createElement('p');
    goodPrice_Price.classList.add('GoodCardPrice_GoodsPrice');
    goodPrice_Price.innerText = elem.price;
    let goodPrice_lowText_CurrensySumbol = document.createElement('p');
    goodPrice_lowText_CurrensySumbol.classList.add('GoodCardPrice_LowText');
    goodPrice_lowText_CurrensySumbol.innerText = 'P';
    goodPriceWrapper.append(goodPrice_lowText_From);
    goodPriceWrapper.append(goodPrice_Price);
    goodPriceWrapper.append(goodPrice_lowText_CurrensySumbol);

    goodCardAdditionalInfo.append(goodGroup);
    goodCardAdditionalInfo.append(goodName)
    goodCardAdditionalInfo.append(goodArticle);
    goodCardAdditionalInfo.append(goodPriceWrapper);

    goodCard.append(goodCard_Img);
    goodCard.append(goodCardAdditionalInfo);

    if (elem.bestseller === true) {
        let bestsellerMark = document.createElement('div');
        bestsellerMark.classList.add('BestsellerGoodMark');
        let bestsellerText = document.createElement('p');
        bestsellerText.innerText = 'Хит продаж';
        let bestsellerIcon = document.createElement('img');
        bestsellerIcon.setAttribute("src", "./public/images/Bestseller.svg");
        bestsellerMark.append(bestsellerIcon);
        bestsellerMark.append(bestsellerText);
        goodCard.prepend(bestsellerMark);
    }
    else if (elem.discount === true) {
        let discountMark = document.createElement('div');
        discountMark.classList.add('DiscountGoodMark');
        let discountText = document.createElement('p');
        discountText.innerText = 'Акция';
        let discountIcon = document.createElement('img');
        discountIcon.setAttribute("src", "./public/images/Discount.svg");
        discountMark.append(discountIcon);
        discountMark.append(discountText);
        goodCard.prepend(discountMark);
    }
    else if (elem.new === true) {
        let newMark = document.createElement('div');
        newMark.classList.add('NewGoodMark');
        let newText = document.createElement('p');
        newText.innerText = 'Акция';
        let newIcon = document.createElement('img');
        newIcon.setAttribute("src", "./public/images/New.svg");
        newMark.append(newIcon);
        newMark.append(newText);
        goodCard.append(newMark);
    }
    if (elem.inStock === true) {
        let inStockMark = document.createElement('div');
        inStockMark.classList.add('InStockGoodMark');
        let inStockText = document.createElement('p');
        inStockText.innerText = 'В наличии';
        let inStockIcon = document.createElement('img');
        inStockIcon.setAttribute("src", "./public/images/CheckMark.svg");
        inStockMark.append(inStockIcon);
        inStockMark.append(inStockText);
        goodCard.append(inStockMark);
    }
    externalWrapper.append(goodCard);
})

