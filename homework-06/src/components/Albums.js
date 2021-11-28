import React from "react";


export const Albums = ({albums}) => {
    return (
        <div>
            <h1>Albums:</h1>
            {albums.map(album => {
                return (
                    <div key={album.id}>
                        <h2>Title {album.id}:</h2>
                        <p>{album.title}</p>
                    </div>
                )
            })}
        </div>
    );
}