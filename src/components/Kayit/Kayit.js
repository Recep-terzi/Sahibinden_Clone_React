import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { InputAdornment, IconButton } from "@mui/material";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import GirisFooter from "../GirisFooter/GirisFooter";
import { Link } from "react-router-dom";
const Kayit = () => {
  document.body.style.backgroundColor = "#f8f8f8";
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  return (
    <>
      <Container component="main" maxWidth="xs" sx={{ mb: 10 }}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="https://iconape.com/wp-content/files/ay/337946/png/sahibinden-com-logo.png"
            alt=""
            style={{ width: "170px", height: "36px" }}
          ></img>

          <Card
            sx={{ mt: 3, border: "1px solid #dfdfdf", borderRadius: "3px" }}
          >
            <Box
              component="form"
              noValidate
              sx={{ p: "50px", mt: 1, height: "804px", width: "442px" }}
            >
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "600",
                  minHeight: "40px",
                  marginBottom: "12px",
                }}
              >
                Hesap A??
              </Typography>
              <div className="row">
                <div className="col-6">
                  <TextField
                    margin="normal"
                    fullWidth
                    sx={{ height: "50px" }}
                    id="email"
                    label="Ad??n??z"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                </div>
                <div className="col-6">
                  <TextField
                    margin="normal"
                    fullWidth
                    sx={{ height: "50px" }}
                    id="email"
                    label="Soyad??n??z"
                    name="email"
                    autoComplete="email"
                    autoFocus
                  />
                </div>
              </div>
              <TextField
                margin="normal"
                fullWidth
                sx={{ height: "50px" }}
                id="email"
                label="E-posta adresiniz"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                sx={{ height: "50px" }}
                name="password"
                value={values.password}
                onChange={handleChange("password")}
                label="??ifre"
                type={values.showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="Toggle Password"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {values.showPassword ? (
                          <VisibilityOff />
                        ) : (
                          <Visibility />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <div
                className="checkbox"
                style={{ marginBottom: "10px", marginTop: "20px" }}
              >
                <input type="checkbox" />
                <label
                  style={{
                    display: "inline",
                    marginLeft: "8px",
                    fontSize: "13px",
                  }}
                >
                  <span>
                    Bireysel Hesap S??zle??mesi ve Ekleri'ni kabul ediyorum.
                  </span>
                </label>
              </div>
              <div className="checkbox">
                <input type="checkbox" />
                <label
                  style={{
                    display: "inline",
                    marginLeft: "8px",
                    fontSize: "13px",
                  }}
                >
                  <span>
                    ??leti??im bilgilerime kampanya, tan??t??m ve reklam i??erikli
                    ticari elektronik ileti g??nderilmesine, bu ama??la ki??isel
                    verilerimin i??lenmesine ve tedarik??ilerinizle payla????lmas??na
                    izin veriyorum.
                  </span>
                </label>
              </div>
              <div style={{ padding: "11px 22px" }}>
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    height: "44px",
                    fontSize: "16px",
                    fontWeight: "600",
                    backgroundColor: "#489ae9",
                    boxShadow: "1px 0 2px 0 rgb(0 0 0 / 13%)",
                    border: "none",
                    color: "white",
                  }}
                >
                  Hesap a??
                </button>
              </div>
              <Grid>
                <Grid
                  item
                  sx={{
                    textAlign: "center",
                    
                    fontSize: "14px",
                    color: "#33333",
                  }}
                >
                  Hesab??n var m??? <Link to="/giris"> Giri?? Yap </Link>
                </Grid>
              </Grid>
              <Grid>
                <Grid
                  item
                  sx={{
                    textAlign: "center",
                    mt: "30px",
                    fontSize: "14px",
                    color: "#33333",
                  }}
                >
                  ????letme sahibi misin?{" "}
                  <Link to="/giris"> Kurumsal Hesap A?? </Link>
                </Grid>
              </Grid>
              <Grid>
                <Grid
                  item
                  sx={{ fontSize: "10px", color: "#999", mt: "40px" }}
                >
                  Bu sayfadaki bilgiler sahibinden.com hesab?? ve fatura
                  g??nderimi dahil olmak ??zere t??m bilgilendirmelerimiz i??in
                  al??nmaktad??r. Ki??isel verilerin korunmas?? hakk??nda detayl??
                  bilgiye buradan ula??abilirsiniz. Bu site reCAPTCHA ile
                  korunmaktad??r. Google Gizlilik Politikas?? ve Kullan??m
                  Ko??ullar?? ge??erlidir.
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Box>
      </Container>
      <GirisFooter />
    </>
  );
};

export default Kayit;
