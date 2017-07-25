import React from 'react';
import {css, StyleSheet} from 'aphrodite';
import Textfield from "./TextField";
import Button from "./Button";

const styles = StyleSheet.create({
    create: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    select: {
        border: 'none',
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
        fontSize: '16px',
        minWidth: '240px',
        paddingRight: '24px',
        marginBottom: '16px',
    },
    input: {
        minWidth: '240px',
    },
    button: {
        minWidth: '240px',
    }
});

const AddItem = props => (
    <form
        onSubmit={
            e => {
                props.onSubmit({
                    title: props.title,
                    category: props.category,
                    status: props.status,
                    location: props.location,
                    description: props.description,
                    userID: props.userID
                });
                e.preventDefault();
            }
        }
        className={css(styles.create)}>
        <Textfield
            id="title"
            type="text"
            placeholder="Title"
            value={props.title}
            onChange={e => props.onTitleChange(e.target.value)}
            style={styles.input}/>
        <select
            className={css(styles.select)}
            onChange={e => props.onCategoryChange(e.target.value)}>
            <option value="CLOTHING">Clothing</option>
            <option value="JEWELRY">Jewelry</option>
            <option value="TECH">Tech</option>
            <option value="TOY">Toy</option>
            <option value="HOUSEHOLD_APPLIANCE">Household Appliance</option>
            <option value="PHOTO">Photo</option>
        </select>
        <select
            className={css(styles.select)}
            onChange={e => props.onStatusChange(e.target.value)}>
            <option value="LOST">Lost</option>
            <option value="FOUND">Found</option>
            <option value="NEEDED">Needed</option>
        </select>
        <Textfield
            id="location"
            type="text"
            placeholder="Location"
            value={props.location}
            onChange={e => props.onLocationChange(e.target.value)}
            style={styles.input}/>
        <Textfield
            id="description"
            type="text"
            placeholder="Description"
            value={props.description}
            onChange={e => props.onDescriptionChange(e.target.value)}
            style={styles.input}/>
        <Button
            style={styles.button}
            type="submit"
            label="CREATE ITEM"
        />
        <Button
            style={styles.button}
            type="button"
            label="CANCEL"
            onClick={() => props.onCancel()}/>
    </form>
);

export default AddItem;