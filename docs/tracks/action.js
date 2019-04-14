/*
 * @Author: 宋慧武
 * @Date: 2019-04-14 16:44:42
 * @Last Modified by: 宋慧武
 * @Last Modified time: 2019-04-15 01:03:46
 */
import { Notification, Message } from "element-ui";
import { format } from "../utils/date";
import { createFragment } from "../utils/dom";

/**
 * @desc 模拟埋点Action
 */
export default function trackAction(evt, addtional = {}) {
  const data = {
    evt,
    ...addtional,
    action_time: format(Date.now())
  };

  if (evt === "2") {
    Message("统计页面停留时间埋点");
  }
  if (evt === "1,3") {
    Message("统计UVPV埋点");
  }
  Notification.success({
    title: "上报数据如下：",
    dangerouslyUseHTMLString: true,
    message: createFragment(data),
    customClass: "notification__large"
  });
}
