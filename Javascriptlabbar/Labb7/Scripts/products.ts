declare var angular: any;

var app = angular.module("productsApp", []);
app.controller("HomeController", HomeController);


module Classes {
    export class Product {
        public Name: string;
        public Category: string;
        public Price: number;
        public ArticleNumber: string;

        constructor(name: string, category: string, price: number, articleNumber: string) {
            this.Name = name;
            this.Category = category;
            this.Price = price;
            this.ArticleNumber = articleNumber;
        }

        public static books: Array<Book> = [];
        public static dvds: DVD[] = [];
        public static games: Game[] = [];
    }
    export class Book extends Product {
        public Author: string;
        public Year: string;

        constructor(name: string, category: string, price: number, articleNumber: string, author: string, year: string) {
            super(name, category, price, articleNumber)
            this.Author = author;
            this.Year = year;
        }
    }
    export class DVD extends Product {
        public Length: number;

        constructor(name: string, category: string, price: number, articleNumber: string, length: number) {
            super(name, category, price, articleNumber);
            this.Length = length;
        }
    }
    export class Game extends Product {
        public HasSplitscreen: boolean;

        constructor(name: string, category: string, price: number, articleNumber: string, hassplitscreen: boolean) {
            super(name, category, price, articleNumber);
            this.HasSplitscreen = hassplitscreen;
        }
    }
}

class Product {
    public Name: string;
    public Category: string;
    public Price: number;
    public ArticleNumber: string;

    constructor(name: string, category: string, price: number, articleNumber: string) {
        this.Name = name;
        this.Category = category;
        this.Price = price;
        this.ArticleNumber = articleNumber;
    }

    public static books: Array<Book> = [];
    public static dvds: Array<DVD> = [];
    public static games: Array<Game> = [];
}
class Book extends Product {
    public Author: string;
    public Year: string;

    constructor(name: string, category: string, price: number, articleNumber: string, author: string, year: string) {
        super(name, category, price, articleNumber)
        this.Author = author;
        this.Year = year;
    }
}
class DVD extends Product {
    public Length: number;

    constructor(name: string, category: string, price: number, articleNumber: string, length: number) {
        super(name, category, price, articleNumber);
        this.Length = length;
    }
}
class Game extends Product {
    public HasSplitscreen: boolean;

    constructor(name: string, category: string, price: number, articleNumber: string, hassplitscreen: boolean) {
        super(name, category, price, articleNumber);
        this.HasSplitscreen = hassplitscreen;
    }
}

var HomeController = app.controller("HomeController", function ($scope) {
    $scope.ShowBooks = function () {
        $scope.retrieved = function () {
            var retrievedProducts: Product[] = [];

            for (var book of Product.books) {
                retrievedProducts.push(book);
            }

            return retrievedProducts;
        } ();
    };
    $scope.ShowProducts = function () {
        $scope.retrieved = function () {
            let retrievedProducts: Array<Product> = [];

            for (var book of Product.books) {
                retrievedProducts.push(book);
            }
            for (var game of Product.games) {
                retrievedProducts.push(game);
            }
            for (var dvd of Product.dvds) {
                retrievedProducts.push(dvd);
            }

            return retrievedProducts;
        } ();
    };

    $scope.SaveBook = function () {
        let name: string = $scope.Name;

        let newBook: Book = new Book($scope.Name, $scope.Category,
            $scope.Price, $scope.ArticleNumber, $scope.Author, $scope.Year);

        Product.books.push(newBook);

    }
    

});


window.onload = function () {
    Product.books.push(new Book("Harry Potter", "fiction", 349, "123456787", "J K Rowling", "2000"));
    Product.books.push(new Book("Harry Potter 2", "fiction", 499, "1234567871", "J K Rowling", "2002"));
    Product.dvds.push(new DVD("Harry Potter 3", "fiction", 59999, "12345678712", 112));
    Product.dvds.push(new DVD("Harry Potter 4", "fiction", 12000, "123456787121", 113));
    Product.games.push(new Game("Starcraft 2", "RTS", 499, "12345678712112", false));

};