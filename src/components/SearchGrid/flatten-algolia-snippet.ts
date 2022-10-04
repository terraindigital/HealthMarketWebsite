

type TOutput = Record<string, unknown>;
type TInputObject = Record<string, any>;
interface IOptions {
    flattenArray?: boolean;
    delimiter?: string;
}

function _isObject(input: any) {
    return typeof input === 'object' && !Array.isArray(input) && input !== null;
}

function flattenObject(obj: TInputObject = {}, inputOptions: IOptions = {}): TOutput {
    const options = {
        flattenArray: true,
        delimiter: '.',
        ...inputOptions,
    };

    if (!obj) return {};

    return Object
        .keys(obj)
        .reduce((result: Record<string, unknown>, key) => {
            const isObject = _isObject(obj[key]);
            const isArray = Array.isArray(obj[key]);

            if (isObject || (options.flattenArray === true && isArray)) {

                if (obj[key]["matchLevel"]) {
                    result[key] = obj[key];
                    return result;
                }

                const flatObject = flattenObject(obj[key], options);

                Object.entries(flatObject).forEach(([name, value]) => {
                    result[`${key}${options.delimiter}${name}`] = value;
                });

                return result;
            }

            result[key] = obj[key];

            return result;
        }, {});
}

const flattenSnippet = (object: TInputObject | undefined): string => {
    const flattenedResults = Object.values(flattenObject(object)).filter(x => !!x.value).sort((x, y) => {
        if (y.matchLevel === "full" && x.matchLevel === "partial" || y.matchLevel === "partial" && x.matchLevel === "none" || y.matchLevel === "full" && x.match === "none") return 1
        if (x.matchLevel === "full" && y.matchLevel === "partial" || x.matchLevel === "partial" && y.matchLevel === "none" || x.matchLevel === "full" && y.match === "none") return -1
        if (y.matchLevel ===  x.matchLevel) return 0
        return 0
    })
    if (flattenedResults.length > 0){
        //@ts-ignore
        return flattenedResults[0].value
    }
    return ""
}

export default flattenSnippet;
