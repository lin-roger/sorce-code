function largest5(a, b, c, d, e) {
    if (a>b && a>c && a>d && a>e) {
        console.log(a);
    }
    else if (b>a && b>c && b>d && b>e) {
        console.log(b);
    }
    else if (c>a && c>b && c>d && c>e) {
        console.log(c);
    }
    else if (d>a && d>b && d>c && d>e) {
        console.log(d);
    }
    else if (e>a && e>b && e>c && e>d) {
        console.log(e);
    }
}

largest5(9, 5, 7, 3, 1)
largest5(5, 10, 7, 3, 1)
largest5(5, 10, 11, 3, 1)
largest5(5, 10, 7, 12, 1)
largest5(5, 10, 7, 3, 13)



