import { Component, OnInit } from '@angular/core';
import { ServiceHotelService } from './services/service-hotel.service';
import { Hotel } from './dto/hotel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Almundo';
  hotels: Hotel[];

  constructor(private hotelService: ServiceHotelService) { }

  ngOnInit() {
    this.searchHotels();
  }

  searchHotels() {
    this.hotelService.getHotels().subscribe((data) => {
      this.hotels = data;
    });
  }

  searchHotel(hotelName: string) {
    this.hotelService.getHotelByName(hotelName).subscribe(data => {
      this.hotels = data;
    });
  }

}
