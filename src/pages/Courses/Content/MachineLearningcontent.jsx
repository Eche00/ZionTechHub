import React, { useState } from "react";
import {
  Reviewimg,
  SirGodsentprofile,
  googlemeet,
  individual,
} from "../../../assets";
import { ArrowBackIos } from "@mui/icons-material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function MachineLearningcontent() {
  const button = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="188"
      height="50"
      viewBox="0 0 188 50"
      fill="none">
      <rect
        y="0.442383"
        width="188"
        height="49.1156"
        rx="24.5578"
        fill="white"
      />
    </svg>
  );
  const dot = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none">
      <g clip-path="url(#clip0_841_1900)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 9C0 6.61305 0.948212 4.32387 2.63604 2.63604C4.32387 0.948212 6.61305 0 9 0C11.3869 0 13.6761 0.948212 15.364 2.63604C17.0518 4.32387 18 6.61305 18 9C18 11.3869 17.0518 13.6761 15.364 15.364C13.6761 17.0518 11.3869 18 9 18C6.61305 18 4.32387 17.0518 2.63604 15.364C0.948212 13.6761 0 11.3869 0 9ZM8.4864 12.852L13.668 6.3744L12.732 5.6256L8.3136 11.1468L5.184 8.5392L4.416 9.4608L8.4864 12.852Z"
          fill="#034FE3"
        />
      </g>
      <defs>
        <clipPath id="clip0_841_1900">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
  const [firstmonth, setFirstMonth] = useState(false);
  const [secondmonth, setSecondMonth] = useState(false);
  const [thirdmonth, setThirdtMonth] = useState(false);
  const [fourthmonth, setFourthMonth] = useState(false);
  const [fifthmonth, setFifthMonth] = useState(false);
  const [sixthmonth, setSixtMonth] = useState(false);
  const firstM = (e) => {
    e.preventDefault();
    setFirstMonth(!firstmonth);
    setSecondMonth(false);
    setThirdtMonth(false);
    setFourthMonth(false);
    setFifthMonth(false);
    setSixtMonth(false);
  };
  const secondM = (e) => {
    e.preventDefault();
    setFirstMonth(false);
    setSecondMonth(!secondmonth);
    setThirdtMonth(false);

    setFourthMonth(false);
    setFifthMonth(false);
    setSixtMonth(false);
  };
  const thirdM = (e) => {
    e.preventDefault();
    setFirstMonth(false);
    setSecondMonth(false);
    setThirdtMonth(!thirdmonth);
    setFourthMonth(false);
    setFifthMonth(false);
    setSixtMonth(false);
  };
  const fourthM = (e) => {
    e.preventDefault();
    setFirstMonth(false);
    setSecondMonth(false);
    setThirdtMonth(false);
    setFourthMonth(!fourthmonth);
    setFifthMonth(false);
    setSixtMonth(false);
  };
  const fifthM = (e) => {
    e.preventDefault();
    setFirstMonth(false);
    setSecondMonth(false);
    setThirdtMonth(false);
    setFourthMonth(false);
    setFifthMonth(!fifthmonth);
    setSixtMonth(false);
  };
  const sixthM = (e) => {
    e.preventDefault();
    setFirstMonth(false);
    setSecondMonth(false);
    setThirdtMonth(false);
    setFourthMonth(false);
    setFifthMonth(false);
    setSixtMonth(!sixthmonth);
  };

  return (
    <div className=" relative pb-[180px]">
      <span className=" w-[3px] h-[36px]  bg-[#034FE3] absolute sm:top-[19px] top-[6px] -left-[1.5px]"></span>
      <div className=" px-[20px]  pb-[68px]">
        <p className=" font-[600] sm:text-[48px] text-[32px] text-[#333]">
          <span className=" text-[#034FE3]">Course </span>content
        </p>
      </div>

      <div className="flex sm:flex-row flex-col-reverse gap-[25px] smm:w-[1238px] sm:w-[1150px] ">
        {/* course content section  */}
        <div className=" flex-1 flex flex-col rounded-tr-[10px] overflow-hidden border border-gray-300 h-fit">
          {/* first month  */}
          <div>
            <div
              className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-full"
              onClick={firstM}>
              {" "}
              {firstmonth ? (
                <KeyboardArrowUpIcon fontSize="large" />
              ) : (
                <KeyboardArrowDownIcon fontSize="large" />
              )}
              <p className=" sm:text-[20px] text-[18px] w-full  font-[600] text-[#1A1A1A]">
                Month 1: Foundations of Machine Learning
              </p>
            </div>
            {firstmonth && (
              <section className=" flex flex-col bg-[#F0F0F0] text-[#482525cc]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>Overview of machine learning concepts
                </p>
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>Types of machine learning: supervised,
                  unsupervised, and reinforcement learning
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>Machine learning lifecycle and workflow
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Introduction to Python/R for machine
                  learning
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Key libraries: NumPy, Pandas, Matplotlib,
                  scikit-learn
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Setting up the development environment
                  (Jupyter Notebooks, IDEs)
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Data cleaning and wrangling techniques
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Feature scaling and normalization
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Handling missing values and outliers
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Descriptive statistics and data
                  visualization
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Identifying patterns and correlations
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Using libraries like Seaborn and Plotly for
                  visualization
                </p>{" "}
              </section>
            )}
          </div>
          {/* second month  */}
          <div>
            <div
              className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer   md:w-full w-full"
              onClick={secondM}>
              {secondmonth ? (
                <KeyboardArrowUpIcon fontSize="large" />
              ) : (
                <KeyboardArrowDownIcon fontSize="large" />
              )}
              <p className=" sm:text-[20px] text-[18px] w-full  font-[600] text-[#1A1A1A]">
                Month 2: Supervised Learning
              </p>
            </div>{" "}
            {secondmonth && (
              <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>Linear regression and multiple linear
                  regression
                </p>
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Polynomial regression and regularization
                  techniques (Ridge, Lasso)
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Model evaluation metrics (MSE, RMSE, R^2)
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>Logistic regression and its variants
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>Decision trees and random forests
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Support Vector Machines (SVM) and K-Nearest
                  Neighbors (KNN)
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Cross-validation and train-test split
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Hyperparameter tuning with GridSearchCV and
                  RandomizedSearchCV
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>Evaluating classification models (accuracy,
                  precision, recall, F1-score)
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>Case studies and real-world examples
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>Implementing regression and classification
                  models on sample datasets
                </p>{" "}
              </section>
            )}
          </div>{" "}
          {/* third month  */}
          <div>
            <div
              className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-full"
              onClick={thirdM}>
              {thirdmonth ? (
                <KeyboardArrowUpIcon fontSize="large" />
              ) : (
                <KeyboardArrowDownIcon fontSize="large" />
              )}
              <p className=" sm:text-[20px] text-[18px] w-full  font-[600] text-[#1A1A1A]">
                Month 3: Unsupervised Learning
              </p>
            </div>
            {thirdmonth && (
              <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>K-Means clustering and hierarchical
                  clustering
                </p>
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> DBSCAN and other clustering algorithms
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Evaluating clustering results
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>Principal Component Analysis (PCA)
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>t-Distributed Stochastic Neighbor Embedding
                  (t-SNE)
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Feature extraction and selection techniques
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Market basket analysis
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Apriori algorithm and FP-Growth
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Interpreting association rules
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Implementing clustering and dimensionality
                  reduction on real-world data
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Case studies and project work
                </p>{" "}
              </section>
            )}
          </div>
          {/* fourth month  */}
          <div>
            <div
              className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-full"
              onClick={fourthM}>
              {fourthmonth ? (
                <KeyboardArrowUpIcon fontSize="large" />
              ) : (
                <KeyboardArrowDownIcon fontSize="large" />
              )}
              <p className=" sm:text-[20px] text-[18px] w-full  font-[600] text-[#1A1A1A]">
                Month 4: Advanced Topics in Machine Learning
              </p>
            </div>
            {fourthmonth && (
              <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>Bagging, boosting, and stacking methods
                </p>
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Understanding Random Forests, Gradient
                  Boosting Machines (GBM), and XGBoost
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Basics of neural networks and deep learning
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Architecture of neural networks (input,
                  hidden, output layers)
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>Activation functions and backpropagation
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Introduction to TensorFlow and Keras
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Building and training basic neural networks
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Introduction to Convolutional Neural
                  Networks (CNNs) and Recurrent Neural Networks (RNNs)
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Implementing deep learning models on sample
                  datasets
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>Hands-on projects using TensorFlow/Keras
                </p>{" "}
              </section>
            )}
          </div>
          {/* fifth month  */}
          <div>
            <div
              className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-full"
              onClick={fifthM}>
              {fifthmonth ? (
                <KeyboardArrowUpIcon fontSize="large" />
              ) : (
                <KeyboardArrowDownIcon fontSize="large" />
              )}
              <p className=" sm:text-[20px] text-[18px] w-full  font-[600] text-[#1A1A1A]">
                Month 5: Special Topics and Advanced Techniques
              </p>
            </div>
            {fifthmonth && (
              <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>Deploying machine learning models to
                  production
                </p>
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Introduction to model serving tools and
                  frameworks (Flask, FastAPI, Docker)
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Basics of NLP and text preprocessing
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Text classification and sentiment analysis
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>Introduction to word embeddings (Word2Vec,
                  GloVe)
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Time series forecasting methods
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> ARIMA and exponential smoothing
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Handling seasonality and trends
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Introduction to Reinforcement Learning
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Advanced hyperparameter tuning and
                  optimization techniques
                </p>{" "}
              </section>
            )}
          </div>
          {/* sixth month  */}
          <div>
            <div
              className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-full"
              onClick={sixthM}>
              {sixthmonth ? (
                <KeyboardArrowUpIcon fontSize="large" />
              ) : (
                <KeyboardArrowDownIcon fontSize="large" />
              )}
              <p className=" sm:text-[20px] text-[18px] w-full  font-[600] text-[#1A1A1A]">
                Month 6: Capstone Project and Review
              </p>
            </div>
            {sixthmonth && (
              <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>Defining project objectives and scope
                </p>
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Data collection and preprocessing for the
                  project
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Designing the machine learning pipeline
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Building and training machine learning
                  models
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>Evaluating and optimizing models
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Preparing a detailed project report
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Presenting findings and results to peers
                  and mentors
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Resume building and LinkedIn profile
                  optimization
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Preparing for machine learning interviews
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Networking and job search strategies
                </p>{" "}
              </section>
            )}
          </div>
        </div>
        {/* instructor section  */}
        <div className="flex flex-col gap-[36px] sm:py-[32px] py-[24px] sm:px-[48px] px-[20px] bg-[#EBECED] rounded-[10px] border border-gray-300 h-fit w-fit">
          <section className=" flex flex-col gap-[24px] ">
            <section className=" flex flex-col">
              {" "}
              <h2 className=" sm:text-[24px] text-[20px] text-[#034FE3] font-[600] w-fit">
                Instructor
              </h2>
              <p className=" text-[16px] text-[#1A1A1ACC] font-[300] w-fit">
                Certified Trainer at Zion Tech Hub
              </p>
            </section>
            <section className=" flex  gap-[14px] ">
              <img
                className="sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] object-cover rounded-full"
                src={SirGodsentprofile}
                alt=""
              />
              <div className=" flex flex-col text-[#1A1A1A] w-fit">
                <p className=" text-[18px] font-[600]">Ndoma Godsent</p>
                <p className=" text-[12px] font-[300]">
                  Co-Founder, Data Analyst
                </p>
              </div>
            </section>
          </section>
          <span className=" h-[1px] sm:w-[317px] w-[300px] bg-[#1A1A1A1A]"></span>
          <section className="flex gap-[12px] w-fit items-center">
            <p className=" sm:text-[20px] text-[18px] font-[300] ">Live on</p>{" "}
            <img
              className=" w-[100px] h-[36px] object-cover"
              src={googlemeet}
              alt=""
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default MachineLearningcontent;
