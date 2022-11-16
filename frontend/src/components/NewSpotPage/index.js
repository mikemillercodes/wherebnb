import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";

import './NewSpot.css'
import { createSpotThunk } from "../../store/spots";