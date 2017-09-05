import SuperMap from '../SuperMap';
import IManagerServiceBase from './iManagerServiceBase';
import IManagerCreateNodeParam from './iManagerCreateNodeParam';
import { FetchRequest } from '../util/FetchRequest';

/**
 * @class SuperMap.iManager
 * @classdesc iManager
 * @param serviceUrl -{string} iManager首页地址
 *
 */
export default class IManager extends IManagerServiceBase {
    /*
     * @function SuperMap.iManager.prototype.constructor
     * @param serviceUrl -{string} iManager首页地址
     */
    constructor(iManagerUrl) {
        super(iManagerUrl);
    }

    /**
     * @function SuperMap.iManager.prototype.load
     * @description 获取所有服务接口，验证是否已登录授权
     */
    load() {
        return this.request("GET", this.serviceUrl + '/web/api/service.json');
    }

    /**
     * @function SuperMap.iManager.prototype.createIServer
     * @param createParam -{SuperMap.iManagerCreateNodeParam} 创建参数
     * @description 创建iServer
     */
    createIServer(createParam) {
        return this.request("POST", this.serviceUrl + '/icloud/web/nodes/server.json', new IManagerCreateNodeParam(createParam));
    }

    /**
     * @function SuperMap.iManager.prototype.createIPortal
     * @param createParam -{SuperMap.iManagerCreateNodeParam} 创建参数
     * @description 创建iPortal
     */
    createIPortal(createParam) {
        return this.request("POST", this.serviceUrl + '/icloud/web/nodes/portal.json', new IManagerCreateNodeParam(createParam));
    }

    /**
     * @function SuperMap.iManager.prototype.iServerList
     * @description 获取所有创建的iServer
     */
    iServerList() {
        return this.request("GET", this.serviceUrl + '/icloud/web/nodes/server.json');
    }

    /**
     * @function SuperMap.iManager.prototype.iPortalList
     * @description 获取所有创建的iPortal
     */
    iPortalList() {
        return this.request("GET", this.serviceUrl + '/icloud/web/nodes/portal.json');
    }

    /**
     * @function SuperMap.iManager.prototype.startNodes
     * @param ids -{Array}  需要启动节点的id数组.e.g:['1']
     * @description 启动节点
     */
    startNodes(ids) {
        return this.request("POST", this.serviceUrl + '/icloud/web/nodes/started.json', ids);
    }

    /**
     * @function SuperMap.iManager.prototype.stopNodes
     * @param ids -{Array}  需要停止节点的id数组.e.g:['1']
     * @description 停止节点
     */
    stopNodes(ids) {
        return this.request("POST", this.serviceUrl + '/icloud/web/nodes/stopped.json', ids);
    }
}

SuperMap.iManager = IManager;

