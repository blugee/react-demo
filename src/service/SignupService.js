import ApiHelper from "./ApiHelper";

class SignupService {
    static async SaveFanSignup(body) {
        return ApiHelper.postAnonymous("/fan", body);
    }
    static async SaveTalentSignup(body) {
        return ApiHelper.postAnonymous("/talent", body);
    }
}

export default SignupService;