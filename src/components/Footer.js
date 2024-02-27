import React from "react";
import CoDS_Black_Logo_XL from "../static/image/CoDS_Black_Logo_XL.png";
import Email from "../static/image/Email.png";
import Phone from "../static/image/Phone.png";
import Mark from "../static/image/Mark.png";

export default function Footer() {
  return (
    <div>
      <div className="w-full h-[535px] px-12 flex flex-row justify-between mt-12">
        <div>
          <div>
            <img
              src={CoDS_Black_Logo_XL}
              alt="CoDS_Black_Logo_XL"
              className="w-[276px] h-[155px]"
            />
          </div>
          <div className="mt-8 ml-20 w-[300px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
          <div className="mt-8 ml-20 flex flex-row space-x-6">
            <div className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="20"
                viewBox="0 0 11 20"
                fill="none"
              >
                <path
                  d="M7.31345 18.895V10.6844H10.2081L10.6415 7.48452H7.31337V5.44155C7.31337 4.51512 7.58355 3.88381 8.97899 3.88381L10.7587 3.88301V1.02109C10.4509 0.982165 9.39435 0.89502 8.16537 0.89502C5.59935 0.89502 3.84261 2.38619 3.84261 5.12474V7.48452H0.940491V10.6844H3.84261V18.8949H7.31345V18.895Z"
                  fill="#2E3192"
                />
              </svg>
            </div>
            <div className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="16"
                viewBox="0 0 19 16"
                fill="none"
              >
                <path
                  d="M12.8767 0.596503V0.593262H13.7207L14.029 0.654854C14.2346 0.69484 14.4213 0.747242 14.589 0.812075C14.7567 0.876909 14.9191 0.952554 15.0759 1.03899C15.2328 1.12543 15.3751 1.21351 15.5028 1.30319C15.6294 1.3918 15.743 1.48581 15.8437 1.58522C15.9432 1.68571 16.0985 1.71164 16.3095 1.66302C16.5205 1.61439 16.7477 1.54685 16.9912 1.46041C17.2346 1.37397 17.4754 1.27672 17.7135 1.16866C17.9515 1.0606 18.0965 0.991989 18.1485 0.962813C18.1993 0.932569 18.2264 0.91636 18.2296 0.914188L18.2328 0.909326L18.2491 0.901221L18.2653 0.893117L18.2815 0.885013L18.2978 0.876909L18.301 0.872046L18.3059 0.868805L18.3108 0.865563L18.314 0.8607L18.3302 0.855838L18.3465 0.852596L18.3432 0.876909L18.3383 0.901221L18.3302 0.925534L18.3221 0.949847L18.314 0.966055L18.3059 0.982264L18.2978 1.00658C18.2924 1.02278 18.287 1.04439 18.2815 1.07141C18.2761 1.09843 18.2247 1.20647 18.1273 1.39558C18.03 1.58468 17.9082 1.77648 17.7621 1.97098C17.6161 2.16548 17.4851 2.31242 17.3694 2.41185C17.2525 2.51234 17.1751 2.58257 17.1373 2.62255C17.0994 2.66361 17.0534 2.70142 16.9993 2.73601L16.9181 2.7895L16.9019 2.79761L16.8857 2.80571L16.8824 2.81057L16.8776 2.81381L16.8727 2.81706L16.8694 2.82192L16.8532 2.83002L16.837 2.83813L16.8338 2.84299L16.8289 2.84623L16.824 2.84947L16.8208 2.85433L16.8175 2.8592L16.8126 2.86244L16.8078 2.86568L16.8045 2.87054H16.8857L17.3401 2.77329C17.6431 2.70846 17.9326 2.63012 18.2085 2.53827L18.6467 2.3924L18.6954 2.37619L18.7198 2.36808L18.736 2.35998L18.7522 2.35187L18.7685 2.34377L18.7847 2.33567L18.8171 2.3308L18.8496 2.32756V2.35998L18.8415 2.36322L18.8334 2.36808L18.8301 2.37294L18.8253 2.37619L18.8204 2.37943L18.8171 2.38429L18.8139 2.38915L18.809 2.3924L18.8042 2.39564L18.8009 2.4005L18.7977 2.40536L18.7928 2.4086L18.7847 2.42481L18.7766 2.44102L18.7717 2.44426C18.7695 2.4475 18.7008 2.53934 18.5656 2.7198C18.4303 2.90134 18.3573 2.99318 18.3465 2.99535C18.3356 2.99859 18.3205 3.0148 18.301 3.04397C18.2826 3.07422 18.1679 3.19471 17.9569 3.40542C17.7459 3.61613 17.5393 3.8036 17.3369 3.96785C17.1335 4.13318 17.0307 4.33632 17.0285 4.57729C17.0253 4.81717 17.0128 5.0884 16.9912 5.39095C16.9695 5.69351 16.929 6.02037 16.8694 6.37156C16.8099 6.72275 16.718 7.11985 16.5935 7.56288C16.4691 8.0059 16.3176 8.43813 16.1391 8.85955C15.9605 9.28097 15.7739 9.65916 15.5791 9.99414C15.3843 10.3291 15.2058 10.6128 15.0435 10.8451C14.8812 11.0774 14.7162 11.2962 14.5484 11.5015C14.3807 11.7068 14.1687 11.9381 13.9122 12.1952C13.6547 12.4513 13.514 12.5918 13.4902 12.6167C13.4653 12.6404 13.3593 12.729 13.1721 12.8825C12.986 13.037 12.7858 13.1915 12.5715 13.346C12.3584 13.4995 12.1625 13.6275 11.984 13.7302C11.8054 13.8328 11.5901 13.9501 11.338 14.0819C11.087 14.2148 10.8153 14.338 10.5232 14.4515C10.231 14.5649 9.92265 14.6703 9.59803 14.7675C9.27341 14.8648 8.95962 14.9404 8.65664 14.9944C8.35368 15.0485 8.01012 15.0944 7.62598 15.1322L7.04979 15.1889V15.197H5.99479V15.1889L5.85682 15.1808C5.76486 15.1754 5.68911 15.17 5.62959 15.1646C5.57009 15.1592 5.34555 15.1295 4.95601 15.0755C4.56647 15.0215 4.2608 14.9674 4.03897 14.9134C3.81716 14.8594 3.48712 14.7567 3.04889 14.6054C2.61066 14.4542 2.23572 14.3012 1.92409 14.1467C1.61355 13.9933 1.41878 13.896 1.33978 13.855C1.26187 13.815 1.17423 13.7653 1.07684 13.7059L0.930764 13.6167L0.927534 13.6119L0.922648 13.6086L0.917779 13.6054L0.914533 13.6005L0.898302 13.5924L0.882071 13.5843L0.878841 13.5794L0.873956 13.5762L0.869086 13.573L0.86584 13.5681L0.86261 13.5632L0.857725 13.56H0.849609V13.5276L0.86584 13.5308L0.882071 13.5357L0.95511 13.5438C1.0038 13.5492 1.13636 13.5573 1.35277 13.5681C1.56919 13.5789 1.79911 13.5789 2.04258 13.5681C2.28604 13.5573 2.53492 13.533 2.78919 13.4952C3.04348 13.4573 3.34375 13.3925 3.69001 13.3007C4.03627 13.2088 4.3544 13.0997 4.6444 12.9732C4.9333 12.8457 5.13888 12.7507 5.26117 12.688C5.38235 12.6264 5.56738 12.5118 5.81625 12.3444L6.18956 12.0931L6.1928 12.0883L6.19767 12.085L6.20256 12.0818L6.20579 12.0769L6.20903 12.0721L6.2139 12.0688L6.21879 12.0656L6.22202 12.0607L6.23825 12.0558L6.25448 12.0526L6.25772 12.0364L6.26259 12.0202L6.26748 12.0169L6.27071 12.0121L6.14086 12.004C6.0543 11.9986 5.97044 11.9932 5.88928 11.9878C5.80813 11.9824 5.68099 11.9581 5.50786 11.9148C5.33474 11.8716 5.14809 11.8068 4.9479 11.7203C4.74772 11.6339 4.55295 11.5312 4.36359 11.4124C4.17424 11.2935 4.03735 11.1946 3.95295 11.1158C3.86963 11.0379 3.76142 10.9277 3.62833 10.7851C3.49632 10.6414 3.38162 10.4939 3.28424 10.3426C3.18685 10.1913 3.0938 10.0168 3.00508 9.81909L2.87035 9.52409L2.86223 9.49978L2.85412 9.47547L2.84925 9.45926L2.846 9.44305L2.87035 9.44629L2.8947 9.45116L3.07323 9.47547C3.19227 9.49168 3.37893 9.49708 3.6332 9.49168C3.88749 9.48628 4.06332 9.47547 4.1607 9.45926C4.25809 9.44305 4.3176 9.43224 4.33924 9.42684L4.3717 9.41874L4.41228 9.41064L4.45286 9.40253L4.4561 9.39767L4.46097 9.39443L4.46586 9.39119L4.46909 9.38632L4.43662 9.37822L4.40416 9.37012L4.3717 9.36201L4.33924 9.35391L4.30678 9.3458C4.28514 9.3404 4.24728 9.32959 4.19316 9.31339C4.13906 9.29718 3.99299 9.23774 3.75493 9.13509C3.51689 9.03244 3.32752 8.93249 3.18685 8.83524C3.04583 8.73771 2.91137 8.63104 2.78433 8.51593C2.65772 8.39923 2.51869 8.24903 2.36719 8.06534C2.21571 7.88165 2.08046 7.66823 1.96142 7.42511C1.8424 7.18198 1.75313 6.94966 1.69361 6.72814C1.63433 6.50793 1.59522 6.28278 1.57677 6.0555L1.54754 5.71512L1.56377 5.71836L1.58 5.72322L1.59623 5.73133L1.61246 5.73943L1.62869 5.74754L1.64492 5.75564L1.8965 5.8691C2.06423 5.94474 2.27252 6.00958 2.52139 6.0636C2.77027 6.11762 2.91904 6.14735 2.96773 6.15275L3.04077 6.16085H3.18685L3.18362 6.15599L3.17873 6.15275L3.17387 6.1495L3.17062 6.14464L3.16739 6.13978L3.1625 6.13654L3.15763 6.1333L3.15439 6.12843L3.13816 6.12033L3.12193 6.11222L3.1187 6.10736L3.11381 6.10412L3.10894 6.10088L3.1057 6.09602L3.08947 6.08791L3.07323 6.07981L3.07 6.07495C3.06676 6.07277 3.02022 6.0382 2.9304 5.97121C2.84167 5.90314 2.74862 5.81508 2.65123 5.70701C2.55385 5.59895 2.45646 5.48549 2.35908 5.36664C2.26151 5.24751 2.17461 5.12005 2.09938 4.98574C2.02365 4.85068 1.94357 4.67885 1.85917 4.47031C1.77585 4.26285 1.71255 4.05376 1.66927 3.84305C1.626 3.63234 1.60165 3.42434 1.59623 3.21902C1.59082 3.01371 1.59623 2.83813 1.61246 2.69225C1.62869 2.54637 1.66115 2.38158 1.70984 2.19789C1.75854 2.0142 1.82888 1.8197 1.92084 1.61439L2.05881 1.30643L2.06692 1.28212L2.07504 1.25781L2.07992 1.25456L2.08315 1.2497L2.0864 1.24484L2.09127 1.2416L2.09615 1.24484L2.09938 1.2497L2.10263 1.25456L2.1075 1.25781L2.11238 1.26105L2.11561 1.26591L2.11886 1.27077L2.12373 1.27401L2.13185 1.29022L2.13996 1.30643L2.14485 1.30967L2.14808 1.31454L2.36719 1.55766C2.51327 1.71975 2.6864 1.90075 2.88658 2.10064C3.08677 2.30054 3.19768 2.40428 3.21931 2.41185C3.24096 2.42048 3.268 2.44533 3.30047 2.4864C3.33293 2.52639 3.44114 2.62202 3.62508 2.77329C3.80904 2.92457 4.0498 3.10017 4.34736 3.30007C4.64493 3.49996 4.97495 3.69717 5.33744 3.89167C5.69994 4.08617 6.08948 4.26176 6.50606 4.41845C6.92265 4.57513 7.21481 4.67778 7.38252 4.72641C7.55025 4.77503 7.83699 4.83716 8.24276 4.9128C8.64853 4.98845 8.95422 5.03707 9.1598 5.05868C9.36539 5.08028 9.50607 5.09272 9.5818 5.09596L9.69542 5.0992L9.69219 5.07489L9.6873 5.05057L9.65484 4.84797C9.6332 4.7129 9.62238 4.5238 9.62238 4.28067C9.62238 4.03755 9.64132 3.81334 9.67919 3.60803C9.71707 3.40271 9.77388 3.19471 9.84961 2.984C9.92536 2.77329 9.99949 2.60417 10.072 2.47668C10.1456 2.35025 10.2419 2.206 10.3609 2.04391C10.4799 1.88183 10.6341 1.71435 10.8235 1.54145C11.0128 1.36856 11.2292 1.21458 11.4727 1.07951C11.7162 0.944449 11.9407 0.841785 12.1463 0.771554C12.3519 0.701323 12.525 0.655389 12.6657 0.633783C12.8063 0.612177 12.8767 0.599745 12.8767 0.596503Z"
                  fill="#2E3192"
                />
              </svg>
            </div>
            <div className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="20"
                viewBox="0 0 19 20"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.849609 9.89502C0.849609 6.29988 0.849609 4.50231 1.7063 3.20757C2.08886 2.62941 2.584 2.13427 3.16216 1.75171C4.4569 0.89502 6.25447 0.89502 9.84961 0.89502C13.4447 0.89502 15.2423 0.89502 16.5371 1.75171C17.1152 2.13427 17.6104 2.62941 17.9929 3.20757C18.8496 4.50231 18.8496 6.29988 18.8496 9.89502C18.8496 13.4902 18.8496 15.2877 17.9929 16.5825C17.6104 17.1606 17.1152 17.6558 16.5371 18.0383C15.2423 18.895 13.4447 18.895 9.84961 18.895C6.25447 18.895 4.4569 18.895 3.16216 18.0383C2.584 17.6558 2.08886 17.1606 1.7063 16.5825C0.849609 15.2877 0.849609 13.4902 0.849609 9.89502ZM14.5089 9.89525C14.5089 12.4686 12.4228 14.5547 9.84945 14.5547C7.27613 14.5547 5.19004 12.4686 5.19004 9.89525C5.19004 7.32193 7.27613 5.23584 9.84945 5.23584C12.4228 5.23584 14.5089 7.32193 14.5089 9.89525ZM9.84945 12.9782C11.5521 12.9782 12.9325 11.5979 12.9325 9.89525C12.9325 8.19255 11.5521 6.81224 9.84945 6.81224C8.14675 6.81224 6.76645 8.19255 6.76645 9.89525C6.76645 11.5979 8.14675 12.9782 9.84945 12.9782ZM14.6929 6.09657C15.2975 6.09657 15.7877 5.6064 15.7877 5.00174C15.7877 4.39709 15.2975 3.90692 14.6929 3.90692C14.0882 3.90692 13.5981 4.39709 13.5981 5.00174C13.5981 5.6064 14.0882 6.09657 14.6929 6.09657Z"
                  fill="#2E3192"
                />
              </svg>
            </div>
            <div className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
              >
                <path
                  d="M0.84964 2.81507C0.84964 2.23786 1.05235 1.76167 1.45775 1.3865C1.86315 1.01131 2.39019 0.82373 3.03883 0.82373C3.6759 0.82373 4.19133 1.00842 4.58516 1.37784C4.99056 1.7588 5.19327 2.25518 5.19327 2.86702C5.19327 3.42113 4.99636 3.88288 4.60254 4.2523C4.19714 4.63325 3.66431 4.82373 3.00408 4.82373H2.98671C2.34963 4.82373 1.8342 4.63325 1.44037 4.2523C1.04655 3.87135 0.84964 3.39227 0.84964 2.81507ZM1.07551 17.9666V6.39949H4.93265V17.9666H1.07551ZM7.06972 17.9666H10.9269V11.5077C10.9269 11.1037 10.9732 10.792 11.0659 10.5726C11.228 10.1801 11.4742 9.84825 11.8043 9.57697C12.1344 9.30568 12.5485 9.17005 13.0466 9.17005C14.3439 9.17005 14.9925 10.0416 14.9925 11.7848V17.9666H18.8496V11.3345C18.8496 9.62603 18.4442 8.33022 17.6334 7.4471C16.8226 6.56399 15.7512 6.12243 14.4191 6.12243C12.9249 6.12243 11.7608 6.76312 10.9269 8.04451V8.07914H10.9095L10.9269 8.04451V6.39949H7.06972C7.09288 6.76889 7.10447 7.91751 7.10447 9.84537C7.10447 11.7732 7.09288 14.4803 7.06972 17.9666Z"
                  fill="#2E3192"
                />
              </svg>
            </div>
            <div className="flex flex-row items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="16"
                viewBox="0 0 21 16"
                fill="none"
              >
                <path
                  d="M11.2882 14.8747L7.22605 14.7988C5.9108 14.7723 4.59228 14.8251 3.30282 14.551C1.34126 14.1415 1.20229 12.1336 1.05688 10.4494C0.856519 8.08155 0.934085 5.67074 1.31219 3.32266C1.52565 2.00514 2.36568 1.21897 3.66476 1.13342C8.05011 0.822948 12.4646 0.859743 16.8403 1.00459C17.3024 1.01787 17.7677 1.09044 18.2234 1.17306C20.4727 1.57597 20.5275 3.85137 20.6733 5.76683C20.8187 7.70205 20.7573 9.64721 20.4794 11.5693C20.2564 13.1607 19.8298 14.4952 18.0294 14.624C15.7737 14.7925 13.5697 14.9281 11.3076 14.8849C11.3077 14.8747 11.2947 14.8747 11.2882 14.8747ZM8.90006 10.8457C10.6 9.84831 12.2674 8.86752 13.9576 7.8768C12.2545 6.87939 10.5902 5.8986 8.90006 4.90788V10.8457Z"
                  fill="#2E3192"
                />
              </svg>
            </div>
          </div>
        </div>
        {/* start of right section */}
        <div className="flex flex-row space-x-24 mt-14">
          <div>
            <div className="text-lg mb-12">Product</div>
            <div className="flex flex-col space-y-5 opacity-50">
              <div>Features</div>
              <div>Pricing</div>
              <div>Case studies</div>
              <div>Reviews</div>
              <div>Updates</div>
            </div>
          </div>
          <div>
            <div className="text-lg mb-12">Company</div>
            <div className="flex flex-col space-y-5 opacity-50">
              <div>About</div>
              <div>Contact us</div>
              <div>Careers</div>
              <div>Culture</div>
              <div>Blog</div>
            </div>
          </div>
          <div>
            <div className="text-lg mb-12">Support</div>
            <div className="flex flex-col space-y-5 opacity-50">
              <div>Getting started</div>
              <div>Help center</div>
              <div>Server status</div>
              <div>Report a bug</div>
              <div>Chat support</div>
            </div>
          </div>
          <div>
            <div className="text-lg mb-12">Contact us</div>
            <div className="flex flex-col space-y-5 opacity-50">
              <div className="flex flex-row">
                <img
                  src={Email}
                  alt="Email"
                />
                contact@company.com
              </div>
              <div className="flex flex-row">
                <img
                  src={Phone}
                  alt="Phone"
                />
                (414)687 - 5892
              </div>
              <div className="flex flex-row">
                <img
                  src={Mark}
                  alt="Mark"
                  className="mb-5 mt-1"
                />
                <div className="flex flex-col">
                  <div>794 Mcallister St</div>
                  <div>San Fransico, 94102</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of right section */}
      </div>
      <div className=" h-[1px] pl-28 mb-12 pr-12 w-full">
        <div className="bg-[#D9DBE9] h-[1px]"></div>

        <div className="mt-9 flex flex-row justify-between">
          <div>Copyright &copy; 2023 coDS</div>
          <div className="flex flex-row mb-7">
            <div>All Rights Reserved</div>
            &nbsp;|&nbsp;
            <div>
              <a href="https://google.com" className="underline">Terms and Conditions</a>
            </div>
            &nbsp;|&nbsp;
            <div>
              <a href="https://google.com" className="underline">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
