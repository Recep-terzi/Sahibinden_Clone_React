import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Container from "@mui/material/Container";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import { Grid } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import Vitrin from "../Vitrin/Vitrin";
import ConstructionIcon from "@mui/icons-material/Construction";
import DirectionsCarFilledIcon from "@mui/icons-material/DirectionsCarFilled";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer"
import "./Home.module.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={3} style={{ marginTop: "20px" }}>
            <ul
              class="ul-1"
              style={{
                listStyle: "none",
                fontSize: "14px",
                padding: "0",
              }}
            >
              <li>
                <div className="row">
                  <div className="col-md-1">
                    <PriorityHighIcon
                      style={{
                        color: "white",
                        backgroundColor: "gray",
                        borderRadius: "50%",
                        width: "20px",
                        height: "20px",
                        padding: "2px",
                      }}
                    ></PriorityHighIcon>
                  </div>
                  <div className="col-md-10">
                    <a href="/">Acil Acil</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div className="col-md-1">
                    <ArrowDownwardIcon
                      style={{
                        color: "white",
                        backgroundColor: "gray",
                        borderRadius: "50%",
                        width: "20px",
                        height: "20px",
                      }}
                    ></ArrowDownwardIcon>
                  </div>
                  <div className="col-md-10">
                    <a href="/">Fiyat?? D????enler</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="row">
                  <div className="col-md-1">
                    <AccessTimeIcon
                      style={{
                        color: "white",
                        backgroundColor: "gray",
                        borderRadius: "50%",
                        width: "20px",
                        height: "20px",
                      }}
                    ></AccessTimeIcon>
                  </div>
                  <div className="col-md-10">
                    <a href="/">Son 48 Saat / 1 Hafta / 1 Ay</a>
                  </div>
                </div>
              </li>
            </ul>
            <hr />
            <ul
              class="oto360"
              style={{
                listStyle: "none",

                padding: "0",
              }}
            >
              <Typography>
                <div className="row">
                  <div className="col-md-1">
                    <DirectionsCarIcon
                      style={{
                        color: "black",
                        backgroundColor: "yellow",
                        borderRadius: "50%",
                        padding: "2px",
                      }}
                    ></DirectionsCarIcon>
                  </div>
                  <div className="col-md-10" style={{ fontSize: "14px" }}>
                    {" "}
                    <a
                      href="/"
                      style={{ fontWeight: "bold", fontSize: "15px" }}
                    >
                      {" "}
                      Oto360
                    </a>
                    <li>
                      <a href="/">S-Garaj??m</a>
                    </li>
                    <li>
                      <a href="/">T??m??n?? G??ster</a>
                    </li>
                  </div>
                </div>
              </Typography>
            </ul>
            <hr />

            <ul
              class="emlak360"
              style={{
                listStyle: "none",
                fontSize: "15px",

                padding: "0",
              }}
            >
              <Typography>
                <div className="row">
                  <div className="col-md-1">
                    <HomeIcon
                      style={{
                        backgroundColor: "yellow",
                        borderRadius: "50%",
                        padding: "2px",
                      }}
                    />
                  </div>
                  <div className="col-md-10">
                    <a href="/" style={{ fontWeight: "bold" }}>
                      Emlak360
                    </a>
                  </div>
                </div>
              </Typography>
            </ul>
            <hr />

            <ul
              class="emlak"
              style={{
                listStyle: "none",
                fontSize: "15px",

                padding: "0",
              }}
            >
              <div className="row" style={{ lineHeight: "1.6em" }}>
                <div className="col-md-1">
                  <HomeIcon
                    style={{
                      color: "white",
                      backgroundColor: "#FCAE1A",
                      borderRadius: "50%",
                      padding: "2px",
                    }}
                  />
                </div>
                <div className="col-md-10">
                  <li>
                    <a href="/" style={{ fontWeight: "bold" }}>
                      Emlak
                    </a>
                  </li>
                  <li>
                    <a href="/">Konut</a>
                  </li>
                  <li>
                    <a href="/">????yeri</a>
                  </li>
                  <li>
                    <a href="/">Arsa</a>
                  </li>
                  <li>
                    <a href="/">Bina</a>
                  </li>
                  <li>
                    <a href="/">Devre M??lk</a>
                  </li>
                  <li>
                    <a href="/">Turistik Tesis</a>
                  </li>
                </div>
              </div>
            </ul>
            <hr />
            <div className="row" style={{ lineHeight: "1.6em" }}>
              <div className="col-md-1">
                <DirectionsCarFilledIcon
                  style={{
                    color: "white",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    padding: "2px",
                  }}
                ></DirectionsCarFilledIcon>
              </div>
              <div className="col-md-10">
                <ul
                  class="vas??ta"
                  style={{
                    listStyle: "none",
                    fontSize: "15px",

                    padding: "0",
                  }}
                >
                  <li>
                    <a href="/" style={{ fontWeight: "bold" }}>
                      Vas??ta
                    </a>
                  </li>
                  <li>
                    <a href="/">Otomobil</a>
                  </li>
                  <li>
                    <a href="/">Arazi, SUV & Pickup</a>
                  </li>
                  <li>
                    <a href="/">Motosiklet</a>
                  </li>
                  <li>
                    <a href="/">Minivan & Panelvan</a>
                  </li>
                  <li>
                    <a href="/">Ticari Ara??lar</a>
                  </li>
                  <li>
                    <a href="/">Elektrikli Ara??lar</a>
                  </li>
                  <li>
                    <a href="/">Kiral??k Ara??lar</a>
                  </li>
                  <li>
                    <a href="/">Deniz Ara??lar??</a>
                  </li>
                  <li>
                    <a href="/">Hasarl?? Ara??lar</a>
                  </li>
                </ul>
              </div>
            </div>

            <hr />
            <div className="row" style={{ lineHeight: "1.6em" }}>
              <div className="col-md-1">
                <ConstructionIcon
                  style={{
                    color: "white",
                    backgroundColor: "#09B8BD",
                    borderRadius: "50%",
                    padding: "3px",
                  }}
                ></ConstructionIcon>
              </div>
              <div className="col-md-10">
                {" "}
                <ul
                  class="yedek-parca"
                  style={{
                    listStyle: "none",
                    fontSize: "15px",

                    padding: "0",
                  }}
                >
                  <li>
                    <a href="/" style={{ fontWeight: "bold" }}>
                      Yedek Par??a, Aksesuar, Donan??m & Tuning
                    </a>
                  </li>
                  <li>
                    <a href="/">Otomotiv Ekipmanlar??</a>
                  </li>
                  <li>
                    <a href="/"> Motosiklet Ekipmanlar?? </a>
                  </li>
                  <li>
                    <a href="/"> Deniz Arac?? Ekipmanlar?? </a>
                  </li>
                </ul>
              </div>
            </div>

            <hr />
            <div className="row" style={{ lineHeight: "1.6em" }}>
              <div className="col-md-1">
                <ShoppingCartIcon
                  style={{
                    color: "white",
                    backgroundColor: "purple",
                    borderRadius: "50%",
                    padding: "3px",
                  }}
                ></ShoppingCartIcon>
              </div>
              <div className="col-md-10">
                <ul
                  class="ikinci-el"
                  style={{ listStyle: "none", padding: "0" }}
                >
                  <li>
                    <a href="/" style={{ fontWeight: "bold" }}>
                      ??kinci El ve <br /> S??f??r Al????veri??
                    </a>
                  </li>
                  <li>
                    <a href="/">Bilgisayar</a>
                  </li>
                  <li>
                    <a href="/"> Cep Telefonu </a>
                  </li>
                  <li>
                    <a href="/"> Foto??raf & Kamera </a>
                  </li>
                  <li>
                    <a href="/"> Ev Dekarasyonu </a>
                  </li>
                  <li>
                    <a href="/"> Ev Elektroni??i </a>
                  </li>
                  <li>
                    <a href="/"> Elektrikli Ev Aletleri </a>
                  </li>
                  <li>
                    <a href="/"> Giyim & Aksesuar </a>
                  </li>
                  <li>
                    <a href="/"> Saat </a>
                  </li>
                  <li>
                    <a href="/"> Anne & Bebek </a>
                  </li>
                  <li>
                    <a href="/"> Ki??isel Bak??m & Kozmetik </a>
                  </li>
                  <li>
                    <a href="/"> Hobi & Oyuncak </a>
                  </li>
                  <li>
                    <a href="/"> Oyun & Konsol </a>
                  </li>
                  <li>
                    <a href="/"> Kitap, Dergi & Film </a>
                  </li>
                  <li>
                    <a href="/"> M??zik </a>
                  </li>
                  <li>
                    <a href="/"> Spor </a>
                  </li>
                  <li>
                    <a href="/"> Tak??, M??cevher & Alt??n </a>
                  </li>
                  <li>
                    <a href="/"> Koleksiyon </a>
                  </li>
                  <li>
                    <a href="/"> Antika </a>
                  </li>
                  <li>
                    <a href="/"> Bah??e & Yap?? Market </a>
                  </li>
                  <li>
                    <a href="/"> Teknik Elektronik </a>
                  </li>
                  <li>
                    <a href="/"> Ofis & K??rtasiye </a>
                  </li>
                  <li>
                    <a href="/"> Yiyecek & ????ecek </a>
                  </li>
                  <li>
                    <a href="/"> Di??er Her ??ey </a>
                  </li>
                </ul>
              </div>
            </div>
          </Grid>
          <Grid item xs={9}>
            <div>
              <ul
                style={{
                  listStyle: "none",
                  display: "block",
                  borderBottom: "1px solid #e6e6e6",
                  margin: "0",
                  padding: "0",
                  marginTop: "10px",
                }}
              >
                <li style={{ float: "right" }}>
                  <a href="/">T??m vitrin ilanlar??n?? g??ster</a>
                </li>
                <li>Anasayfa Vitrini</li>
              </ul>
              <Vitrin />
            </div>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Home;
