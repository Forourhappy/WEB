type Words = {
	[key: string]: string;
};

class Dict {
	private word: Words;
	constructor() {
		this.word = {};
	}

	add(word: Words) {
		if (this.word[word.term] === undefined) {
			this.word[word.term] = word.def;
		}
	}

	get(term: string) {
		return this.word[term];
	}
}

class Word {
	constructor(protected term: string, protected dec: string) {}
}

const typescript = new Word('타입스크립트', '재밌다');

const myDic = new Dict();

console.log(myDic.get('타입스크립트'));
