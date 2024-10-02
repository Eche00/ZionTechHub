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

function CloudComputingcontent() {
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

      <div className="flex sm:flex-row flex-col-reverse gap-[25px] sm:w-[1238px] ">
        {/* course content section  */}
        <div className=" flex-1 flex flex-col rounded-tr-[10px] overflow-hidden border border-gray-300 h-fit">
          {/* first month  */}
          <div>
            <div
              className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-fit   md:w-full"
              onClick={firstM}>
              {" "}
              {firstmonth ? (
                <KeyboardArrowUpIcon fontSize="large" />
              ) : (
                <KeyboardArrowDownIcon fontSize="large" />
              )}
              <p className=" sm:text-[20px] text-[18px] md:w-full w-[287px] font-[600] text-[#1A1A1A]">
                Month 1: Introduction to Cloud Computing
              </p>
            </div>
            {firstmonth && (
              <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>Introduction to cloud computing concepts
                </p>
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Understanding cloud service models: IaaS,
                  PaaS, SaaS
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Cloud deployment models: Public, private,
                  hybrid, and multi-cloud
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Overview of major cloud providers: AWS,
                  Azure, Google Cloud
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Setting up cloud accounts and understanding
                  billing and cost management
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Introduction to virtualization and
                  hypervisors
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Creating and managing virtual machines
                  (VMs) in the cloud
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Basics of cloud networking: VPC, subnets,
                  security groups
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Configuring and managing cloud networks
                </p>{" "}
              </section>
            )}
          </div>
          {/* second month  */}
          <div>
            <div
              className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-fit   md:w-full"
              onClick={secondM}>
              {secondmonth ? (
                <KeyboardArrowUpIcon fontSize="large" />
              ) : (
                <KeyboardArrowDownIcon fontSize="large" />
              )}
              <p className=" sm:text-[20px] text-[18px] md:w-full w-[287px] font-[600] text-[#1A1A1A]">
                Month 2: Infrastructure as Code (IaC)
              </p>
            </div>{" "}
            {secondmonth && (
              <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>Understanding Infrastructure as Code
                  principles
                </p>
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Overview of IaC tools: Terraform, AWS
                  CloudFormation, Ansible
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Setting up Terraform environment
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Writing Terraform scripts to provision
                  cloud infrastructure
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>Managing infrastructure with Terraform state
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Modularizing Terraform configurations
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Using AWS CloudFormation to automate AWS
                  resource management
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Introduction to Ansible for configuration
                  management
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Writing Ansible playbooks to automate
                  server configuration
                </p>{" "}
              </section>
            )}
          </div>{" "}
          {/* third month  */}
          <div>
            <div
              className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-fit   md:w-full"
              onClick={thirdM}>
              {thirdmonth ? (
                <KeyboardArrowUpIcon fontSize="large" />
              ) : (
                <KeyboardArrowDownIcon fontSize="large" />
              )}
              <p className=" sm:text-[20px] text-[18px] md:w-full w-[287px] font-[600] text-[#1A1A1A]">
                Month 3: Continuous Integration/Continuous Deployment (CI/CD)
              </p>
            </div>
            {thirdmonth && (
              <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>Introduction to Continuous Integration and
                  Continuous Deployment
                </p>
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Benefits of CI/CD in DevOps
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Overview of CI/CD tools: Jenkins, GitLab
                  CI, CircleCI
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Setting up Jenkins for CI/CD
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>Creating and managing Jenkins pipelines
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Integrating Jenkins with version control
                  systems (Git)
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Setting up CI/CD pipelines in GitLab
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Integrating Docker with CI/CD pipelines for
                  containerized deployments
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Automated testing in CI/CD pipelines
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Deploying applications to cloud
                  environments using CI/CD
                </p>{" "}
              </section>
            )}
          </div>
          {/* fourth month  */}
          <div>
            <div
              className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-fit   md:w-full"
              onClick={fourthM}>
              {fourthmonth ? (
                <KeyboardArrowUpIcon fontSize="large" />
              ) : (
                <KeyboardArrowDownIcon fontSize="large" />
              )}
              <p className=" sm:text-[20px] text-[18px] md:w-full w-[287px] font-[600] text-[#1A1A1A]">
                Month 4: Containerization and Orchestration
              </p>
            </div>
            {fourthmonth && (
              <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>Understanding containerization concepts
                </p>
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Installing and using Docker for container
                  management
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Building and managing Docker images and
                  containers
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Orchestrating multi-container applications
                  with Docker Compose
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>Managing container clusters with Docker
                  Swarm
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Understanding Kubernetes architecture and
                  components
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Setting up a Kubernetes cluster (Minikube,
                  EKS, GKE)
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Deploying applications to Kubernetes
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Managing Kubernetes deployments, services,
                  and pods
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Kubernetes networking and storage
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Monitoring and scaling Kubernetes clusters
                </p>{" "}
              </section>
            )}
          </div>
          {/* fifth month  */}
          <div>
            <div
              className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-fit   md:w-full"
              onClick={fifthM}>
              {fifthmonth ? (
                <KeyboardArrowUpIcon fontSize="large" />
              ) : (
                <KeyboardArrowDownIcon fontSize="large" />
              )}
              <p className=" sm:text-[20px] text-[18px] md:w-full w-[287px] font-[600] text-[#1A1A1A]">
                Month 5: Monitoring, Logging, and Security
              </p>
            </div>
            {fifthmonth && (
              <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>Introduction to cloud monitoring tools:
                  Prometheus, CloudWatch, Grafana
                </p>
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Setting up monitoring dashboards and alerts
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Introduction to log management tools: ELK
                  Stack (Elasticsearch, Logstash, Kibana)
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Collecting and analyzing logs for cloud
                  applications
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>Identity and Access Management (IAM) in the
                  cloud
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Securing cloud resources with encryption,
                  firewalls, and security groups
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Compliance and governance in the cloud
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Planning and implementing disaster recovery
                  strategies
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Automating incident response and recovery
                  processes
                </p>{" "}
              </section>
            )}
          </div>
          {/* sixth month  */}
          <div>
            <div
              className="sm:py-[24px] sm:px-[40px] py-[16px] px-[16px]  flex gap-[10px] sm:items-center bg-[#EBECED]  border-b border-gray-300 cursor-pointer w-fit   md:w-full"
              onClick={sixthM}>
              {sixthmonth ? (
                <KeyboardArrowUpIcon fontSize="large" />
              ) : (
                <KeyboardArrowDownIcon fontSize="large" />
              )}
              <p className=" sm:text-[20px] text-[18px] md:w-full w-[287px] font-[600] text-[#1A1A1A]">
                Month 6: Capstone Project and Advanced Topics
              </p>
            </div>
            {sixthmonth && (
              <section className=" flex flex-col bg-[#F0F0F0] text-[#1A1A1ACC]">
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>Choosing a cloud computing or DevOps project
                </p>
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Defining project objectives and
                  requirements
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Designing the project architecture
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Implementing Infrastructure as Code (IaC)
                  for the project
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span>Setting up CI/CD pipelines and container
                  orchestration
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Applying monitoring, logging, and security
                  measures
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Conducting thorough testing of the project
                  components
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Optimizing cloud resources for performance
                  and cost-efficiency
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Finalizing project documentation
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Presenting the capstone project to peers
                  and mentors
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Receiving feedback and making final
                  adjustments
                </p>{" "}
                <p className=" sm:text-[20px] text-[16px] font-[300] flex gap-[14px] sm:py-[24px] sm:px-[48px] py-[16px] px-[16px] items-center  md:w-full w-[329px]">
                  <span>{dot}</span> Preparing for real-world application and
                  deployment
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
          <section className="flex gap-[12px] w-fit">
            <p className=" sm:text-[20px] text-[18px] font-[300] ">Live on</p>{" "}
            <img
              className=" sm:w-[193px] sm:h-[35px] w-[139px] h-[25px] object-cover "
              src={googlemeet}
              alt=""
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default CloudComputingcontent;
