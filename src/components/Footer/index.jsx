import styles from "../Footer/styles.module.css";
import { IconButton } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSocial}>
        <div>
          <IconButton href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <GitHubIcon />
          </IconButton>
          <IconButton href="instagram.com" target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </IconButton>
          <IconButton href="https://br.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </IconButton>
        </div>
      </div>

      <div className="">
        &copy; {new Date().getFullYear()} Trails-SC | Todos os direitos
        reservados
      </div>
    </footer>
  );
}

export default Footer;
