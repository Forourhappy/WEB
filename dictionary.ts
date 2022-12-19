type Words = {
	[key: string]: string;
};

class Dict {
	private words: Words;
	constructor() {
		this.words = {};
	}

	add(word: Word) {
		if (this.words[word.term] === undefined) {
			this.words[word.term] = word.def;
		}
	}

	get(term: string) {
		return this.words[term];
	}

	delete(term: string) {
		delete this.words[term];
	}

	update(word: Word) {
		if (this.words[word.term] !== undefined) {
			this.words[word.term] = word.def;
		}
	}

	showAll() {
		for (let key in this.words) {
			console.log(`${key}: ${this.words[key]}`);
		}
	}

	count() {
		return Object.keys(this.words).length;
	}
}

class Word {
	constructor(public term: string, public def: string) {}
}

const myDic = new Dict();

myDic.add(new Word('typescript', 'fun'));
myDic.add(new Word('javascript', 'good'));
myDic.add(new Word('html', 'awesome'));
myDic.add(new Word('css', 'wow'));

myDic.delete('typescript');

myDic.showAll();
console.log(myDic.count());
