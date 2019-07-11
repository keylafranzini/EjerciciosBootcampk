import { Component } from '@angular/core';
import { ITab } from './core/interfaces/ITabs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'tabs';

  public tabs: ITab [];

  constructor() {
  }

  ngOnInit(){
    this.tabs = [
      {
        title: 'TAB 1',
        body: 'Cupcake ipsum dolor sit amet. Oat cake apple pie cotton candy toffee ice cream cotton candy marshmallow brownie jelly-o. Pie carrot cake soufflé. Tart cake cupcake cupcake bear claw brownie. Bonbon brownie chocolate bar halvah chocolate cake liquorice lollipop cheesecake toffee. Tootsie roll lollipop marzipan gingerbread jujubes pudding. Caramels caramels powder. Topping caramels topping pastry chupa chups lollipop dessert chupa chups. Cheesecake croissant icing cookie pastry liquorice liquorice tiramisu biscuit. Tootsie roll marzipan cookie brownie. Gingerbread carrot cake pastry donut brownie donut sweet roll gingerbread. Donut lollipop tootsie roll sugar plum soufflé gingerbread bear claw sugar plum topping.'
      },
      {
        title: 'TAB 2',
        body: 'Soufflé sweet roll candy donut marzipan. Pastry toffee candy canes sweet roll jelly. Lemon drops cookie caramels. Candy cupcake pastry jelly beans topping cookie chupa chups. Cheesecake danish apple pie pie toffee gingerbread. Jelly-o oat cake brownie gummies. Candy powder pie apple pie lollipop jelly beans.'
      },
      {
        title: 'TAB 3',
        body: 'Tiramisu bonbon cupcake dragée candy pie sweet sweet jujubes. Cake gingerbread muffin sweet icing cheesecake gingerbread. Bonbon lemon drops biscuit wafer cheesecake halvah soufflé liquorice marzipan. Pudding pudding fruitcake cake dessert dragée. Candy dessert gingerbread jujubes fruitcake jelly-o cookie. Ice cream fruitcake jelly beans. Lemon drops cheesecake biscuit marshmallow sesame snaps soufflé. '
      },
      {
        title: 'TAB 4',
        body: 'Dragée gummies powder candy canes jelly bonbon jelly beans oat cake gummies. Gummi bears sugar plum pastry pastry toffee croissant. Cake wafer cupcake marshmallow brownie. Bonbon jelly-o carrot cake cotton candy topping powder jelly beans jujubes cake. Cake sweet cheesecake. Muffin muffin jelly beans biscuit macaroon gingerbread cookie halvah. Gingerbread cupcake chocolate bar gummi bears cookie. Bear claw bear claw danish cookie. Wafer cake gummi bears sesame snaps bonbon jelly-o lollipop topping jujubes.'
      },
      {
        title: 'TAB 5',
        body: 'Sweet roll jujubes liquorice jujubes marzipan toffee carrot cake tart. Dessert caramels marzipan. Chocolate cake lemon drops sweet lollipop dragée topping croissant. Sweet candy cake bear claw chocolate croissant chupa chups. Marzipan tiramisu fruitcake powder. Cake oat cake jelly dragée chocolate cake cake pie wafer topping. Chocolate cake sugar plum caramels bear claw. Ice cream ice cream ice cream chocolate cake cake halvah chocolate cake gummi bears. Wafer jelly carrot cake halvah dessert tiramisu topping cake lollipop. Sugar plum sweet cake oat cake halvah dragée carrot cake liquorice lemon drops. Gummies dessert candy cupcake chocolate tart jelly. Ice cream liquorice marshmallow chocolate bar cake caramels. Tootsie roll bear claw wafer fruitcake.'
      },
    ]
  }

}
