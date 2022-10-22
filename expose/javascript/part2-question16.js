let statistics = {
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    blackCars: 5,
    rareCars: 2
};

for (p in statistics) {
    if (statistics[p] % 2 != 0 || p[0] == 'r'){
        console.log(statistics[p]);
    }
}