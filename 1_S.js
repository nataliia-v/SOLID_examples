//Single Responsibility Principle

class News {

    constructor(title, text) {
        this.text = text;
        this.title = title;
        this.modified = false;
    }

    update(text) {
        this.text = text;
        this.modified = true;
    }


}

class NewsPrinter {
    constructor(news) {
        this.news = news;
    }

    html() {
        return `
            <div>
                <h1>${this.news.title}</h1>
                 <p>${this.news.text}</p>
            </div>
        `
    }
    json() {
        return JSON.stringify({
            title: this.news.title,
            text: this.news.text,
            modified: this.news.modified
        }, null, 2)
    }

}

const printer = new NewsPrinter(new News('Title', 'text text'));

console.log(printer.html());
