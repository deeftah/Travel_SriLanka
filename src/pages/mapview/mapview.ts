import {Component, ElementRef, ViewChild} from '@angular/core';
import { NavController} from 'ionic-angular';
import {ConnectivityService} from "../../providers/connectivity-service";
import { Geolocation } from 'ionic-native';

declare var google;

@Component({
  selector: 'page-mapview',
  templateUrl: 'mapview.html'
})
export class MapviewPage {


  @ViewChild('map') mapElement: ElementRef;

  map: any;
  mapInitialised: boolean = false;
  apiKey: any;
  //directionsService :any;
  //directionsDisplay :any;
  //infoWindow :any;


  constructor(public nav: NavController, public connectivityService: ConnectivityService) {
    this.loadGoogleMaps();
    this.apiKey = 'AIzaSyCiA_dnCA1YsfiFpiMI_b8OPAdhr05Isdc';
  }

  loadGoogleMaps(){

    this.addConnectivityListeners();

    if(typeof google == "undefined" || typeof google.maps == "undefined"){

      console.log("Google maps JavaScript needs to be loaded.");
      this.disableMap();

      if(this.connectivityService.isOnline()){
        console.log("online, loading map");

        //Load the SDK
        window['mapInit'] = () => {
          this.initMap();
          this.enableMap();
        }

        let script = document.createElement("script");
        script.id = "googleMaps";

        if(this.apiKey){
          script.src = 'http://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
        } else {
          script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';
        }

        document.body.appendChild(script);

      }
    }
    else {

      if(this.connectivityService.isOnline()){
        console.log("showing map");
        this.initMap();
        this.enableMap();
      }
      else {
        console.log("disabling map");
        this.disableMap();
      }

    }

  }

  initMap(){

    this.mapInitialised = true;
    //this.directionsService = new google.maps.DirectionsService();
    //this.infoWindow = new google.maps.InfoWindow();

    Geolocation.getCurrentPosition().then((position) => {

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      this.map = new google.maps.Marker({
        position: latLng,
        map: this.map,
        draggable:true
      });

      // let lineSymbol = {
      //   path: google.maps.SymbolPath.CIRCLE,
      //   fillOpacity: 1,
      //   scale: 3
      // };
      //
      // let polylineDotted = new google.maps.Polyline({
      //   strokeColor: '#0eb7f6',
      //   strokeOpacity: 0,
      //   fillOpacity: 0,
      //   icons: [{
      //     offset: '0',
      //     repeat: '10px'
      //   }],
      // });
      //
      // let rendererOptions = {
      //   map: this.map,
      //   suppressMarkers: false,
      //   polylineOptions: polylineDotted
      // };
      //
      // this.directionsDisplay = new google.maps.DirectionsRenderer(rendererOptions);
      //
      // let center = new google.maps.LatLng(0, 0);
      // let myOptions = {
      //   zoom: 7,
      //   mapTypeId: google.maps.MapTypeId.ROADMAP,
      //   center: center
      // };
      //
      // this.map = new google.maps.Map(document.getElementById("map"), myOptions);
      // this.directionsDisplay.setMap(this.map);
      //
      //
      // let start = "Lafayette Avenue 212, New York City";
      // let end = "Myrtle Avenue 11612, New York City";
      // let method = 'DRIVING';
      // let request = {
      //   origin: start,
      //   destination: end,
      //   travelMode: google.maps.DirectionsTravelMode[method]
      // };
      //
      // this.directionsService.route(request, function (response, status) {
      //   if (status == google.maps.DirectionsStatus.OK) {
      //     this.directionsDisplay.setDirections(response);
      //     let iwContent = response['routes'][0].legs[0].distance.text + '<br />' + response['routes'][0].legs[0].duration.text;
      //     //this.infoWindow.setContent(iwContent);
      //   }
      // });
      //
      // google.maps.event.addListener(polylineDotted, 'click', function (event) {
      //
      //   this.infoWindow.setPosition(event.latLng);
      //   this.infoWindow.open(this.map, this);
      // });
      //
      // google.maps.event.addListener(this.map, 'click', function () {
      //
      //   this.infoWindow.close();
      // });

    });

  }

  disableMap(){
    console.log("disable map");
  }

  enableMap(){
    console.log("enable map");
  }

  addConnectivityListeners(){

    let onOnline = () => {

      setTimeout(() => {
        if(typeof google == "undefined" || typeof google.maps == "undefined"){

          this.loadGoogleMaps();

        } else {

          if(!this.mapInitialised){
            this.initMap();
          }

          this.enableMap();
        }
      }, 2000);

    };

    let onOffline = () => {
      this.disableMap();
    };

    document.addEventListener('online', onOnline, false);
    document.addEventListener('offline', onOffline, false);

  }

}
