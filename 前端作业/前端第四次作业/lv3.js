function clone(target){
    if(typeof target === 'object')
    //检查是否是引用类型，如果是，递归直到原始属性；
    {   let cloneTarget = Array.isArray(target)?[]:{};
        //判断是否为数组，如果是数组则cloneTarget为数组，否则为引用类型
        for (const key in target)
        {cloneTarget[key]=clone(target[key]);}
        //利用递归遍历需要克隆的对象
        return cloneTarget;
    }else{
        return target;
    }
    
}