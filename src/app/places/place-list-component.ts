import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { IPlace } from "./place";
import { PlaceService } from "./place.service";

@Component({
    selector: 'pm-places',
    templateUrl: './place-list.component.html'
})
export class PlaceListComponent implements OnInit{
    pageTitle: string = 'Places List';
    imageHeight: number = 80;
    showImage: boolean = false
    private _listFilter: string = '';
    errorMessage: any;
    center!: google.maps.LatLngLiteral;
    markers: any[] = [];

    constructor(
        private placeService: PlaceService){}
    
    get listFilter(): string{
        return this._listFilter;
    }

    set listFilter(value:string){
        this._listFilter = value;
        this.filteredPlaces = this.performFilter(value);
    }
    
    filteredPlaces : IPlace[] = [];
    performFilter(filterBy: string): IPlace[] {
        filterBy = filterBy.toLowerCase();
        return this.places.filter((place: IPlace) => 
            place.name.toLowerCase().includes(filterBy));
    }

    places: IPlace[] = []
    
    ngOnInit(): void {
        this.placeService.getPlaces().subscribe({
            next: places =>{
                this.places = places;
                this.filteredPlaces = this.places;
                this.pushMarkers();
            },
            error: err => this.errorMessage = err 
        });
        navigator.geolocation.getCurrentPosition((position) => {
            this.center = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            }
        })
        
    }
    
    pushMarkers(): void{
        this.places.forEach(place => {
            this.markers.push({
                position:{
                    lat: place.latitude,
                    lng: place.longitud,
                },
                label:{
                    color: 'white',
                    fontFamily: 'Arial',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    border: '1px',
                    labelOrigin: new google.maps.Point(13.5, 15),
                    text: place.name,
                },
                title: place.name,
                options: {
                    animation: google.maps.Animation.DROP
                },
                icon: {
                    url: '../assets/images/fire.svg',
                    scaledSize:{
                        width: 50,
                        height: 50
                    }
                }
            })
        });
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }
}