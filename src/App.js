import "./App.css";
import image from "./album.png";
import logoo from "./spotify-logo.png";
import React, { useState } from "react";
// import { Slider } from "@material-ui/core";

const songsDB = {
	music: [
		{
			name: "Starboy",
			artist: "The Weeknd",
			length: "4:16",
			cover: "logoo"
		},
		{
			name: "Demons",
			artist: "Imagine Dragons",
			length: "5:24"
		},
		{
			name: "Mouth of the river",
			artist: "Imagine Dragons",
			length: "6:23"
		},
		{
			name: "Ghost Stories",
			artist: "Coldplay",
			length: "3:10"
		},
		{
			name: "Sparks",
			artist: "Coldplay",
			length: "4:23"
		},
		{
			name: "Viva La Vida",
			artist: "Coldplay",
			length: "4:32"
		},
		{
			name: "Hymn for the weekend",
			artist: "Coldplay",
			length: "2:23"
		},
		{
			name: "Pain",
			artist: "Ryan Jones",
			length: "3:12"
		}
	]
};

function App() {
	var songArray = Object.keys(songsDB);
	const [selectedSong, setSong] = useState("music");
	return (
		<div className="App">
			<div class="column navigation">
				<img alt="logo" src={logoo}></img>
				<h2>Spotifty</h2>
				<p style={{ color: "white" }}>For You</p>
				<p>Top Tracks</p>
				<p>Favourites</p>
				<p>Recently Played</p>
			</div>
			<div class="column for-you">
				<h2>For You</h2>
				<ul style={{ "list-style": "none" }}>
					{songsDB[selectedSong].map((song) => (
						<li key={song.name}>
							<div>
								<img style={{ display: "inline", float: "left" }} src={song.cover} alt="Album Pic"></img>
								<ul style={{ listStyle: "none" }}>
									<div>
										<li>{song.name}</li>
										<li>{song.artist}</li>
									</div>
									{/* <div style={{ display: "block", float: "right" }}>{song.length}</div> */}
									<li style={{ display: "block", float: "right" }}>{song.length}</li>
								</ul>
							</div>
						</li>
					))}
				</ul>
			</div>
			{/* <input placeholder="Search Song, Artist">test</input> */}
			<div class="column music-details">
				<h2>Viva La vida</h2>
				<p>Coldplay</p>
				<img alt="album here" src={image}></img>
			</div>
		</div>
	);
}

export default App;
