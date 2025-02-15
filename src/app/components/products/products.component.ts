import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {
      name: 'Чехол для Iphone 13',
      description: 'Крутой чехол.',
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5c/hec/86261115060254.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000',
    },
    {
      name: 'Электрочайник Yingzheng ZY-305 черный',
      description: 'Крутой чайник..',
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h5b/h9b/82803977289758.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/elektrochainik-yingzheng-zy-305-chernyi-112526442/?c=750000000',
    },
    {
      name: 'Пылесос Deerma DX115C черный',
      description: 'Крутой пылесос.',
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h93/hcf/63791470936094.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/deerma-dx115c-chernyi-3701430/?c=750000000',
    },
    {
      name: 'Наушники Apple AirPods 3 with Lightning Charging Case белый',
      description: 'Крутые наушнники.',
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000',
    },
    {
      name: 'IKEA Kupong Купон будильник-часы, зеленый 4x6 см',
      description: 'Крутой будильник.',
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h94/hd0/64105101918238.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/ikea-kupong-kupon-budil-nik-chasy-zelenyi-4x6-sm-103114140/?c=750000000',
    },
    {
      name: 'Рюкзак OEM 102011-141217 черный',
      description: 'Крутой рюкзак',
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hfb/h9f/65094363021342.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/rjukzak-oem-102011-141217-chernyi-107354519/?c=750000000',
    },
    {
      name: 'Коврик для мыши Art Strata 900x400x3 рисунок',
      description: 'Крутой коврик для мыши.',
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/he9/hbc/79798659809310.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/art-strata-900x400x3-risunok-109753958/?c=750000000',
    },
    {
      name: 'Клавиатура Ajazz AK820',
      description: 'Крутая клавиатура.',
      rating: 5.0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/pf5/18569101.png?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/ajazz-ak820-max-he-chernyi-132993743/?c=750000000',
    },
    {
      name: 'Мышь Attack Shark X11 черный',
      description: 'Крутая машь.',
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hca/h3f/86489028067358.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000',
    },
    {
      name: 'Зарядное устройство Apple 20W USB-C Power Adapter белый',
      description: 'Крутой адаптер.',
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=gallery-medium',
      link: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_performance_max_clothes&gclid=CjwKCAiA8Lu9BhA8EiwAag16b4cH7sbd3EeC36XKnJ-DrJ-BeeJipdKY-iM0MEybQ3tDVXr6Exz3hxoCpH8QAvD_BwE',
    },
  ];

  shareProduct(link: string, platform: string) {
    let shareUrl = '';
    if (platform === 'whatsapp') {
      shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(link)}`;
    } else if (platform === 'telegram') {
      shareUrl = `https://t.me/share/url?url=${encodeURIComponent(link)}`;
    }
    window.open(shareUrl, '_self');
  }
}
