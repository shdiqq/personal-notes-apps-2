import React from "react";
import PropTypes from "prop-types";
import Button from "../../../components/button";
import styles from "./index.module.css"

class CreateNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      lengthInputTitleNote: 50,
    }
  }

  onTitleChangeEventHandler = (event) => {
    if (this.state.lengthInputTitleNote > 0 || event.target.value.length < this.state.title.length) {
      this.setState(() => {
        return {
          lengthInputTitleNote: 50 - event.target.value.length,
          title: event.target.value,
        }
      });
    }
  }

  onBodyChangeEventHandler = (event) => {
    this.setState(() => {
      return {
        body: event.target.value,
      }
    })
  }

  onSubmitEventHandler = (event) => {
    event.preventDefault();
    this.props.createNote(this.state);
  }

  render() {
      return(
        <>
          <h2 className={styles.h2}>Buat Catatan</h2>
          <form className={styles.form} onSubmit={this.onSubmitEventHandler}>
            <p className={styles.lenChar}>Sisa karakter: {this.state.lengthInputTitleNote}</p>
            <input className={styles.input} placeholder="e.g. Travel Diary" value={this.state.title} onChange={this.onTitleChangeEventHandler}></input>
            <textarea className={styles.textarea} placeholder="Write your notes here..." value={this.state.body} onChange={this.onBodyChangeEventHandler}></textarea>
            <div className={styles.button}><Button text={"Buat"} type={"submit"} isAllBorder={true}/></div>
          </form>
        </>
      )
  }
}

CreateNote.propTypes = {
  createNote : PropTypes.func.isRequired,
};

export default CreateNote;