walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			makeItCultural(node);
			break;
	}
}

function makeItCultural(textNode) 
{
	var text = textNode.nodeValue;

//Хуй и его производные
	text = text.replace(/Хуяр/g, "Фигар");
	text = text.replace(/хуяр/i, "фигар");
	text = text.replace(/(По(\s|)ху(й|я|ям|ю)($|.|\s|,|\?|!)|До пизды)/g, randomWord(["Неважно", "Индифферентно", "Безразлично", "Всё равно"]));
	text = text.replace(/(по(\s|)ху(й|я|ям|ю)($|.|\s|,|\?|!)|до пизды)/i, randomWord(["неважно", "индифферентно", "безразлично", "всё равно"]));
	text = text.replace(/(На(\s|)ху(й|ю)($|.|\s|,|\?|!)|(В|Ф)(\s|)п(из|ес)ду)/g, randomWord(["К чёрту", "К чертям собачьим"]));
	text = text.replace(/(на(\s|)ху(й|ю)($|.|\s|,|\?|!)|(в|ф)(\s|)п(из|ес)ду)/i, randomWord(["к чёрту", "к чертям собачьим"]));
	text = text.replace(/(На(\s|)хуя($|.|\s|,|\?|!)|(в|ф)(\s|)п(из|ес)ду)/g, randomWord(["Зачем", "Для чего", ""]));
	text = text.replace(/Ху(ё|е)в(аст|)(еньк|)(ы(й|х|е|м)|о(е|го|й|му)|ая|ий)/g, "Низкого качества");
	text = text.replace(/ху(ё|е)в(аст|)(еньк|)(ый|ая|ое|ого|ой|ий|ому|ых|ые|ым)/i, "низкого качества");
	text = text.replace(/Ху(ё|е)в(аст|)(еньк|)о/g, randomWord(["Плохо", "Печально", "Ужасно", "Кошмарно", "Уныло"]));
	text = text.replace(/ху(ё|е)в(аст|)(еньк|)о/i, randomWord(["плохо", "печально", "ужасно", "кошмарно", "уныло"]));
	text = text.replace(/(О|А)ху(ен|(ет|)итель)н/g, randomWord(["Замечетельн", "Превосходн", "Шикарн", "Отличн"]));
	text = text.replace(/(о|а)ху(ен|(ет|)итель)н/i, randomWord(["замечетельн", "превосходн", "шикарн", "отличн"]));
	text = text.replace(/(О|А|При)хуеть/g, "С ума сойти");
	text = text.replace(/(о|а|при)хуеть/i, "с ума сойти");
	text = text.replace(/(О|А|При)хуе(л(а|)|ю|ешь|вае(шь|те|т))/g, randomWord(["Не в себе", "В шоке"]));
	text = text.replace(/(о|а|при)хуе(л(а|)|ю|ешь|вае(шь|те|т))/i, randomWord(["не в себе", "в шоке"]));
	text = text.replace(/Ху(е|и|й)(пл(ё|е)т|л(а|о))/g, randomWord(["Дурак", "Подлец"]));
	text = text.replace(/ху(е|и|й)(пл(ё|е)т|л(а|о))/i, randomWord(["дурак", "подлец"]));
	text = text.replace(/(\s|^|"|«|\()Хуй/g, randomWord(["Пенис", "Член", "Детородный орган"]));
	text = text.replace(/(\s|^|"|«|\()Хуя/g, randomWord(["Пениса", "Члена"])); //также сработает с "хуями"
	text = text.replace(/(\s|^|"|«|\()Хуи/g, randomWord(["Пенисы", "Члены", "Детородные органы"]));
	text = text.replace(/(\s|^|"|«|\()Хуе/g, randomWord(["Пенисе", "Члене", "Детородном органе"]));
	text = text.replace(/(\s|^|"|«|\()Хую/g, randomWord(["Пенису", "Члену", "Детородному орган"]));
	text = text.replace(/(\s|^|"|«|\()Ху(е|ё)в/g, randomWord(["Пенисов", "Членов", "Детородных органов"]));
	text = text.replace(/(\s|^|"|«|\()Хуем/g, randomWord(["Пенисом", "Членом", "Детородным органом"]));
	text = text.replace(/(\s|^|"|«|\()хуй/i, randomWord(["пенис", "член", "детородный орган"]));
	text = text.replace(/(\s|^|"|«|\()хуя/i, randomWord(["пениса", "члена"])); //также сработает с "хуями"
	text = text.replace(/(\s|^|"|«|\()хуи/i, randomWord(["пенисы", "члены", "детородные органы"]));
	text = text.replace(/(\s|^|"|«|\()хуе/i, randomWord(["пенисе", "члене", "детородном органе"]));
	text = text.replace(/(\s|^|"|«|\()хую/i, randomWord(["пенису", "члену", "детородному орган"]));
	text = text.replace(/(\s|^|"|«|\()ху(е|ё)в/i, randomWord(["пенисов", "членов", "детородных органов"]));
	text = text.replace(/(\s|^|"|«|\()хуем/i, randomWord(["пенисом", "членом", "детородным органом"]));

//Пизда и её производные
	text = text.replace(/Пиздец/g, randomWord(["Ужас", "Кошмар"]));
	text = text.replace(/пиздец/i, randomWord(["ужас", "кошмар"]));
	text = text.replace(/Пизд(о|а)бол/g, randomWord(["Лжец", "Врун", "Болтун"]));
	text = text.replace(/пизд(о|а)бол/i, randomWord(["лжец", "врун", "болтун"]));
	text = text.replace(/Пизд(е|ё)ж/g, randomWord(["Ложь", "Неправда"]));
	text = text.replace(/пизд(е|ё)ж/i, randomWord(["ложь", "неправда"]));
	text = text.replace(/Пиздеть/g, randomWord(["Врать", "Лгать", "Пустословить"]));
	text = text.replace(/пиздеть/i, randomWord(["Врать", "Лгать", "Пустословить"]));
	text = text.replace(/Пиздишь/g, randomWord(["Врёшь", "Лжёшь", "Пустословишь"]));
	text = text.replace(/пиздишь/i, randomWord(["Врёшь", "Лжёшь", "Пустословишь"]));
	text = text.replace(/Отпизди$/g, randomWord(["Избей", "Побей"]));
	text = text.replace(/отпизди$/i, randomWord(["избей", "побей"]));
	text = text.replace(/Отпиздят/g, randomWord(["Изобьют", "Побьют"]));
	text = text.replace(/отпиздят/i, randomWord(["изобьют", "побьют"]));
	text = text.replace(/Отпизд/g, randomWord(["Изб", "Поб"]));
	text = text.replace(/отпизд/i, randomWord(["изб", "поб"]));
	text = text.replace(/Отпизжен(н|)/g, randomWord(["Избит", "Побит"]));
	text = text.replace(/отпизжен(н|)/i, randomWord(["избит", "побит"]));
	text = text.replace(/Отпизжу/g, randomWord(["Изобью", "Побью"]));
	text = text.replace(/отпизжу/i, randomWord(["изобью", "побью"]));
	text = text.replace(/Распиздя/g, "Лентя");
	text = text.replace(/распиздя/i, "лентя");
	text = text.replace(/Спиз(д|ж)/g, randomWord(["Стащ", "Утащ"]));
	text = text.replace(/спиз(д|ж)/i, randomWord(["стащ", "утащ"]));
	text = text.replace(/Пиздат$/g, randomWord(["Прекрасен", "Великолепен", "Хорош"]));
	text = text.replace(/пиздат$/i, randomWord(["прекрасен", "великолепен", "хорош"]));
	text = text.replace(/Пиздат/g, randomWord(["Замечетельн", "Превосходн", "Шикарн", "Отличн"]));
	text = text.replace(/пиздат/i, randomWord(["замечетельн", "превосходн", "шикарн", "отличн"]));
	text = text.replace(/Пизд/g, "Вагин");
	text = text.replace(/пизд/i, "вагин");

//Ебать и производные
	text = text.replace(/Ебаться/g, randomWord(["Заниматься любовью", "Заниматься сексом"]));
	text = text.replace(/ебаться/i, randomWord(["заниматься любовью", "заниматься сексом"]));
	text = text.replace(/Ебануться/g, randomWord(["С ума сойти"]));
	text = text.replace(/ебануться/i, randomWord(["с ума сойти"]));
	text = text.replace(/(Еба|Ёб)нул/, randomWord(["Помешал"]));
	text = text.replace(/(еба|ёб)нул/i, randomWord(["помешал"]));
	text = text.replace(/(Заеб(ись|ок|ато|ово)|Охуенчик)/g, randomWord(["Хорошо", "Замечательно", "Великолепно", "Прекрасно", "Восхитительно", "Отлично", "Превосходно"]));
	text = text.replace(/(заеб(ись|ок|ато|ово)|охуенчик)/i, randomWord(["хорошо", "замечательно", "великолепно", "прекрасно", "восхитительно", "отлично", "превосходно"]));
	text = text.replace(/Заеба/g, randomWord(["Надое", "Доста"]));
	text = text.replace(/заеба/i, randomWord(["надое", "доста"]));
	text = text.replace(/Про(е|ё)ба/g, "Потеря");
	text = text.replace(/про(е|ё)ба/i, "потеря");	
	text = text.replace(/На(е|ё)бан(н|)/g, randomWord(["Обманут"]));
	text = text.replace(/на(е|ё)бан(н|)/i, randomWord(["обманут"]));
	text = text.replace(/На(е|ё)ба/g, randomWord(["Обману"]));
	text = text.replace(/на(е|ё)ба/i, randomWord(["обману"]));
	text = text.replace(/На(е|ё)б/g, randomWord(["Обман"]));
	text = text.replace(/на(е|ё)б/i, randomWord(["обман"]));
	text = text.replace(/(Вы|От(ъ|))еба/g, "Поиме");
	text = text.replace(/(вы|от(ъ|))еба/i, "поиме");
	text = text.replace(/От(ъ|)ебись/g, "Отстань");
	text = text.replace(/от(ъ|)ебись/i, "отстань");
	text = text.replace(/От(ъ|)ебитесь/g, "Отстаньте");	
	text = text.replace(/от(ъ|)ебитесь/g, "отстаньте");
	text = text.replace(/Разъеба/g, randomWord(["Разруши", "Уничтожи"]));
	text = text.replace(/разъеба/i, randomWord(["разруши", "уничтожи"]));
	text = text.replace(/Разъ(е|ё)быва/g, randomWord(["Разруша", "Уничтожа"]));
	text = text.replace(/разъ(е|ё)быва/i, randomWord(["разруша", "уничтожа"]));
	text = text.replace(/((Д(о|а)лб(о|а)|У)((ё|е)|йо)(б|п)(ик|ок|ищ(е|)|ан|))/g, "Дурак");
	text = text.replace(/((д(о|а)лб(о|а)|у)((ё|е)|йо)(б|п)(ик|ок|ищ(е|)|ан|))/i, "дурак");
	text = text.replace(/(Въ|у|Пере)еб(а|о|ну)(ши|)/g, randomWord(["Удари", "Стукну"]));
	text = text.replace(/(Въ|у|Пере)еб(а|о|ну)(ши|)/i, randomWord(["удари", "стукну"]));
	text = text.replace(/(Въ|у)(е|ё)б/g, "Стукн");
	text = text.replace(/(въ|у)(е|ё)б/i, "стукн");	
	text = text.replace(/Еб(а|)л(о|ище|ет)/g, "Лицо");
	text = text.replace(/еб(а|)л(о|ище|ет)/i, "лицо");
	text = text.replace(/(Е|Ё)бл(а|ища|еты)/g, "Лица");
	text = text.replace(/(е|ё)бл(а|ища|еты)/i, "лица");
	text = text.replace(/(^|\s)(Е|Ё)ба/g, " Сноша");
	text = text.replace(/(^|\s)(е|ё)ба/i, " сноша");
	text = text.replace(/(^|\s)Еб(е|ё)/g, " сношае");
	text = text.replace(/(^|\s)еб(е|ё)/i, " сношае");

//Прочие
	text = text.replace(/Пид(о|а)р(|ас|ок)/g, randomWord(["Гей", "Гомосексуалист"]));
	text = text.replace(/пид(о|а)р(|ас|ок)/i, randomWord(["гей", "гомосексуалист"]));
	text = text.replace(/(^|\s)Муд(а(ч(о|ё|и)|)к|ил(а|о)|озвон)/g, "Подлец");
	text = text.replace(/(^|\s)муд(а(ч(о|ё|и)|)к|ил(а|о)|озвон)/g, "подлец");
	text = text.replace(/Говн/g, "Дерьм");
	text = text.replace(/говн/i, "дерьм");

	textNode.nodeValue = text;
}

function randomWord(words)
{
	return words[Math.floor(Math.random() * words.length)];
}
