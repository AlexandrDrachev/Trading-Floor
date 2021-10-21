import React from 'react';
import { ReactComponent as UpworkIcon } from './icon-upwork.svg';
import { ReactComponent as DevIcon } from './developer-icon.svg';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {

  return (
    <div className="absolute bottom-0 left-0 w-full bg-purple-700 p-10 flex justify-between items-center border-t border-purple-400">
      <div className="flex justify-center items-center">
        <div className="w-8 h-8 text-white flex justify-center items-center">
          <DevIcon />
        </div>
        <div className="text-xl font-bold ml-4 text-white">Alex Drachev</div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col justify-start items-start mr-5">
          <div className="flex justify-center items-center text-white my-1">
            <div className="w-5 h-5 text-white mr-2 flex justify-center items-center"><UpworkIcon /></div>
            <a
              href="https://www.upwork.com/freelancers/~012a861fc6367091d0"
              rel="noreferrer"
              target="_blank"
              className="text-sm transform hover:scale-110 hover:text-pink-400 font-bold">
              Project brain
            </a>
          </div>
          <div className="flex justify-center items-center text-white my-1">
            <div className="w-5 h-5 text-white mr-2 flex justify-center items-center"><GitHubIcon /></div>
            <a
              href="https://github.com/AlexandrDrachev/Trading-Floor"
              rel="noreferrer"
              target="_blank"
              className="text-sm transform hover:scale-110 hover:text-pink-400 font-bold">
              Project code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
