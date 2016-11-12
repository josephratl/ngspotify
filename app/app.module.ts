import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { SpotifyService } from './services/spotify.service';
import { AlbumComponent } from './components/album/album.component';
import { ArtistComponent } from './components/artist/artist.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
    imports: [BrowserModule, routing, FormsModule, HttpModule],
    declarations: [AppComponent,
        NavbarComponent,
        AboutComponent,
        AlbumComponent,
        ArtistComponent,
        SearchComponent],
    providers: [
        SpotifyService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
