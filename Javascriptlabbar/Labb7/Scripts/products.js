var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var app = angular.module("productsApp", []);
app.controller("HomeController", HomeController);
var Classes;
(function (Classes) {
    var Product = (function () {
        function Product(name, category, price, articleNumber) {
            this.Name = name;
            this.Category = category;
            this.Price = price;
            this.ArticleNumber = articleNumber;
        }
        Product.books = [];
        Product.dvds = [];
        Product.games = [];
        return Product;
    }());
    Classes.Product = Product;
    var Book = (function (_super) {
        __extends(Book, _super);
        function Book(name, category, price, articleNumber, author, year) {
            _super.call(this, name, category, price, articleNumber);
            this.Author = author;
            this.Year = year;
        }
        return Book;
    }(Product));
    Classes.Book = Book;
    var DVD = (function (_super) {
        __extends(DVD, _super);
        function DVD(name, category, price, articleNumber, length) {
            _super.call(this, name, category, price, articleNumber);
            this.Length = length;
        }
        return DVD;
    }(Product));
    Classes.DVD = DVD;
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game(name, category, price, articleNumber, hassplitscreen) {
            _super.call(this, name, category, price, articleNumber);
            this.HasSplitscreen = hassplitscreen;
        }
        return Game;
    }(Product));
    Classes.Game = Game;
})(Classes || (Classes = {}));
var Product = (function () {
    function Product(name, category, price, articleNumber) {
        this.Name = name;
        this.Category = category;
        this.Price = price;
        this.ArticleNumber = articleNumber;
    }
    Product.books = [];
    Product.dvds = [];
    Product.games = [];
    return Product;
}());
var Book = (function (_super) {
    __extends(Book, _super);
    function Book(name, category, price, articleNumber, author, year) {
        _super.call(this, name, category, price, articleNumber);
        this.Author = author;
        this.Year = year;
    }
    return Book;
}(Product));
var DVD = (function (_super) {
    __extends(DVD, _super);
    function DVD(name, category, price, articleNumber, length) {
        _super.call(this, name, category, price, articleNumber);
        this.Length = length;
    }
    return DVD;
}(Product));
var Game = (function (_super) {
    __extends(Game, _super);
    function Game(name, category, price, articleNumber, hassplitscreen) {
        _super.call(this, name, category, price, articleNumber);
        this.HasSplitscreen = hassplitscreen;
    }
    return Game;
}(Product));
var HomeController = app.controller("HomeController", function ($scope) {
    $scope.ShowBooks = function () {
        $scope.retrieved = function () {
            var retrievedProducts = [];
            for (var _i = 0, _a = Product.books; _i < _a.length; _i++) {
                var book = _a[_i];
                retrievedProducts.push(book);
            }
            return retrievedProducts;
        }();
    };
    $scope.ShowProducts = function () {
        $scope.retrieved = function () {
            var retrievedProducts = [];
            for (var _i = 0, _a = Product.books; _i < _a.length; _i++) {
                var book = _a[_i];
                retrievedProducts.push(book);
            }
            for (var _b = 0, _c = Product.games; _b < _c.length; _b++) {
                var game = _c[_b];
                retrievedProducts.push(game);
            }
            for (var _d = 0, _e = Product.dvds; _d < _e.length; _d++) {
                var dvd = _e[_d];
                retrievedProducts.push(dvd);
            }
            return retrievedProducts;
        }();
    };
    $scope.SaveBook = function () {
        var name = $scope.Name;
        var newBook = new Book($scope.Name, $scope.Category, $scope.Price, $scope.ArticleNumber, $scope.Author, $scope.Year);
        Product.books.push(newBook);
    };
});
window.onload = function () {
    Product.books.push(new Book("Harry Potter", "fiction", 349, "123456787", "J K Rowling", "2000"));
    Product.books.push(new Book("Harry Potter 2", "fiction", 499, "1234567871", "J K Rowling", "2002"));
    Product.dvds.push(new DVD("Harry Potter 3", "fiction", 59999, "12345678712", 112));
    Product.dvds.push(new DVD("Harry Potter 4", "fiction", 12000, "123456787121", 113));
    Product.games.push(new Game("Starcraft 2", "RTS", 499, "12345678712112", false));
};
