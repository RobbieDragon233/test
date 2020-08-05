
export function test(hexagonGrid){
        hexagonGrid.con2Area(1,2,1,3)
        hexagonGrid.con2Area(1,3,2,3)
        hexagonGrid.con2Area(2,3,3,3)
        hexagonGrid.con2Area(3,3,4,4)
        hexagonGrid.con2Area(4,4,4, 5)
        hexagonGrid.con2Area(4,5,5, 4)
        hexagonGrid.con2Area(5,4,5, 5)
        hexagonGrid.con2Area(5,5,6,6)
        hexagonGrid.testIcon(7,6,'./img/mountain.svg')
        hexagonGrid.testIcon(8,6,'./img/mountain.svg')
        hexagonGrid.testIcon(7,5,'./img/mountain.svg')

        hexagonGrid.testIcon(6,9,'./img/tank.png')
        hexagonGrid.testIcon(5,9,'./img/tank.png')

        hexagonGrid.testIcon(7,10,'./img/soldier.png')
        hexagonGrid.testIcon(5,10,'./img/soldier.png')
        hexagonGrid.testIcon(6,10,'soldier.png')

}