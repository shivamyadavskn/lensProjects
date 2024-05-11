import React from "react";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import AddModeratorIcon from '@mui/icons-material/AddModerator';
import GavelIcon from '@mui/icons-material/Gavel';
function Qualifications() {
  return (
    <div className="qulisect">
      <div>
        <div className="qulisect_data_new">
          <div>
            <h3 className="title_qual">
              Diversity & Fairness
            </h3>
            <span className="subtitle_qual">
              When training our AI models, we consider ethical and social
              implications of algorithm-based decision making. Our solutions use
              high-quality and fairly-represented data sets to eliminate human
              cognitive biases.
            </span>
          </div>
          <div>
            <Diversity3Icon className="testmui iconify iconify--ic border-icon" />
            <span className="subtitle_qual_lin"></span>
          </div>
        </div>
        <div className="qulisect_data_new">
          <div></div>
          <div className="">
            <AddModeratorIcon
              className="testmui iconify iconify--carbon border-icon"
            />
            <span className="border-3 border-black border-dotted"></span>
          </div>
          <div>
            <h3 className="title_qual">
              Regulatory Compliance
            </h3>
            <span className="subtitle_qual">
              Working with clients globally, LENS acknowledges applicable data
              privacy regulations, such as the GDPR, HIPAA and others, in all
              our solutions handling sensitive data. We also ensure our
              algorithms allow for the required level of decision-making
              transparency and explainability.
            </span>
          </div>
        </div>
        <div className="qulisect_data_new">
          <div>
            <h3 className="title_qual">
              Code of Ethics
            </h3>
            <span className="subtitle_qual">
              LENS believes in a just, non-violent world of equality and
              fairness. We prize democratic values, civil liberties and open and
              informed debate. When used to further these values,
              algorithm-based decision-making models can continue to make the
              world a safer, better place for everyone.
            </span>
          </div>
          <div>
            <GavelIcon className="testmui iconify iconify--emojione-monotone border-icon" />
            <span className="subtitle_qual_lin"></span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qualifications;