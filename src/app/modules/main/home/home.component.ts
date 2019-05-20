import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
   isAndroid:boolean=false;

  deviceInfo = null; 
  downloadUrl: string = "https://intellifriend-web.firebaseapp.com/assets/downloads/installers";
  builds = {
    "windows": "intellifriend-v1.0.0-win.exe",
    "mac": "intellifriend-1.0.0.dmg",
    "linux": "linux.zip"
  }
  fullDownloadURL: string = this.downloadUrl;

  constructor(private deviceService: DeviceDetectorService) { 

  }

  ngOnInit() {
      console.log('hello `Home` component');
      this.deviceInfo = this.deviceService.getDeviceInfo();
      const isMobile = this.deviceService.isMobile();
      const isTablet = this.deviceService.isTablet();
      const isDesktopDevice = this.deviceService.isDesktop();
      console.log(this.deviceInfo);
      console.log(isMobile);  // returns if the device is a mobile device (android / iPhone / windows-phone etc)
      console.log(isTablet);  // returns if the device us a tablet (iPad etc)
      console.log(isDesktopDevice); // returns if the app is running on a Desktop browser.
      // const android=this.deviceInfo.os;
      const android=this.deviceInfo.os;
      console.log(android);
      
      if (android=="Android") 
        this.isAndroid=true;
      else
        this.isAndroid=false;
      console.log("Android= "+this.isAndroid);
      
      this.fullDownloadURL = this.downloadUrl + "/" + this.builds[this.deviceInfo.os.toLowerCase()];
  
  }

}
