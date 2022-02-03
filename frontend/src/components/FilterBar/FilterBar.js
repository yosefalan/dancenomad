import React, { useState } from "react"
import Feed from "../Feed/Feed"
import Navigation from "../Navigation/Navigation"
import Select from 'react-select'
import styles from "./FilterBar.module.css"
import { genre_options } from "../../data"

function FilterBar( {

  setGenreFilter }) {

    const [genre, setGenre] = useState("");


      // setGenreFilter(genre)

    // console.log("GGGGGGGGGGGGGG", g)

  return (
    <>
      <div className={styles.filter_main}>
        <Select
            className={styles.filter_genre}
            // defaultValue={genres}
            onChange={setGenre, setGenreFilter(genre.label)}
            isClearable={true}
            options={genre_options}
            placeholder="Filter by Genre"
        />
      </div>

    </>
  )

}


export default FilterBar
