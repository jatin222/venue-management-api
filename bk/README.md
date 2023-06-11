# Venue Mangement with 2D & 3D view

## Phase 1:

 1. **Login**
 2. **Registration as guest**
 3. **Admin Dashboard**
 4. **User Mangement (Add, Edit, Delete, View)**
	 - Add users with Role (Admin, Venue Admin, Event Admin, Guest)
	 - Delete will be always a soft delete
	 - Add logs for all errors
	 - Add logs for all database entries
 5. **Venue Mangement (Add, Edit, Delete, View)**
	 - Fields:
	 - Venue name
	 - Google Location
	 - Address (Country, Region, City, Street, Pincode)
	 - Contact email
	 - Contact Phone number
	 - Description
	 - Venue Gallery (Videos, Images)
	 - Venue Areas (Multiple Areas) (Name, Description, 2D, 3D)
	 - Venue Halls (Multiple Halls) (Name, Description, 2D, 3D)
	 - Venue floors (Multiple floors in Hall) (Name, Description, 2D, 3D)
	 - Object of venue according to their Area, Hall & Floor (Name, Thumbnail, Description, 2D image, 3D image)
6. **Venue public page**
7. **2D editor** *(Autosave everything)*
	- Object *(Add, Edit, Delete, Drag & Drop, Move object, Multiple select, Multiple move)*
	- Add Toolbar *(Move editor position, reset editor position, zoom in, zoom out, reset, undo, rendo, copy, paste, delete)*
	- Add object info bar *(See details of object)*

## Tech Stack:  
Backend: Nodejs  
Frontend: Reactjs  
Database: MongoDB / MySQL

## Repos:
Backend: [APIs](https://github.com/jatin222/venue-management-api)

Frontend:  
[Venue Admin UI](https://github.com/jatin222/venue-management-venue-admin-ui),
[Editor](https://github.com/jatin222/venue-management-editor-ui),
[Admin UI](https://github.com/jatin222/venue-management-admin-ui)
