import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { certificateIcon } from "../assets";
import { SectionWrapper } from "../hoc";
import { certificates } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CertificateCard = ({
  index,
  name,
  description,
  tags,
  title,
  icon,
  link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full "
      >
        <div className="relative w-full h-[230px] ">
          <img
            src={icon}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          {title}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(link, "_blank")}
              className="black-gradient w-20 h-20 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={certificateIcon}
                alt="certificateIcon"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>
        <div className="mt-5 ">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags?.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certification = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Certifications
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Certificates.
        </h2>
      </motion.div>
      <div className="w-full flex align-middle">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]  "
        >
          {" "}
          My professional certifications validate my expertise and commitment to
          staying at the forefront of industry best practices. Each
          certification represents rigorous training and examination,
          demonstrating my proficiency in specific technologies and domains.
          These credentials, combined with practical experience, position me as
          a skilled and knowledgeable professional.
        </motion.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {certificates.map((certificate, index) => (
          <CertificateCard key={`project-${index}`} {...certificate} index={index} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certification, "certificates");
