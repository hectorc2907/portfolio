import { Helmet } from "react-helmet-async";
import { motion } from "motion/react";
import itsFine from "../../assets/gif/itsFine.gif";

const PageNotFound = () => {
  return (
    <>
      <Helmet>
        <title>Página no encontrada</title>
      </Helmet>
      <motion.div className={`mx-5`}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10 text-4xl text-center font-playFair italic"
        >
          Página no encontrada.
        </motion.p>
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          viewport={{ once: true }}
          src={itsFine}
          alt="itsFine"
          className="rounded-xl"
        />
        <div className="mt-10 flex justify-center">
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            href="/"
            className="max-w-[150px] w-full"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
              className="py-2 text-white text-center rounded-xl bg-gradient-to-r from-redIcon to-cianIcon hover:brightness-[1.2]"
            >
              Home
            </motion.div>
          </motion.a>
        </div>
      </motion.div>
    </>
  );
};

export default PageNotFound;
